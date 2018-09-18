import fs from 'fs'
import remark from 'remark'
import path from 'path'
import { escape, forEach, includes, reduce, replace, trim } from 'lodash'
import mdToAst from '@textlint/markdown-to-ast'
import is from 'unist-util-is'
import templateIndex from './templateIndex'
import templateComponentNavigable from './templateComponentNavigable'

const REGEX = {
  MD: /^.+\.md(x)?$/,
  JS: /^.+\.js(x)?$/,
}

const MD = {
  PARAGRAPH: 'paragraph',
  TEXT: 'text',
  CODE: 'code',
  ROOT: 'root',
}

const rendering = RegExp(/^(([^;]+);)?([^`]+)$/, 'm')

const DEST_DIR = 'native'

function genUUID() {
  return Math.round(Math.random() * 36 ** 12).toString(36)
}

function parseMD() {
  const renders = []

  function visitParagraph(p) {
    forEach(p.children, child => {
      if (is(MD.TEXT, child)) {
        renders.push({
          id: genUUID(),
          render: `<Text>${child.value}</Text>`,
          beforeRender: `const Text = require('react-native').Text`,
        })
      }
    })
  }

  function visitCode(c) {
    const compute = rendering.exec(c.value)
    renders.push({
      id: genUUID(),
      render: compute[3],
      beforeRender: compute[2],
    })
  }

  function currentNode(node, file) {
    if (is(MD.PARAGRAPH, node)) {
      visitParagraph(node)
    } else if (is(MD.CODE, node)) {
      visitCode(node)
    } else if (!!node.children) {
      forEach(node.children, child => currentNode(child, file))
    } else if (is(MD.ROOT, node)) {
    }
  }

  return transformer

  function transformer(tree, file) {
    currentNode(tree, file)
    file.renders = renders
  }
}

function readMDFile(componentName, src) {
  return new Promise((resolve, reject) => {
    fs.readFile(src, 'utf-8', (err, data) => {
      if (err) reject(err)

      return remark()
        .use(mdToAst)
        .use(parseMD)
        .process(data, (err, res) => {
          if (err) reject(err)

          resolve(
            templateComponentNavigable({
              component: componentName,
              pathToCompo: `../${  replace(path.dirname(src, '.md'), /\\\\*/g, '/')}`, // Windows is <3
              renders: res.renders,
            }),
          )
        })
    })
  })
}

const whiteList = ['Text']

if (!fs.existsSync(DEST_DIR)) {
  fs.mkdirSync(DEST_DIR)
}

function srcFile(dir) {
  return `src/components/${dir}/Readme.md`
}

const generatedNav = []

forEach(whiteList, compo => {
  const filePath = srcFile(compo)

  const destFileName = `${compo}Nav`
  generatedNav.push(destFileName)
  readMDFile(compo, filePath)
    .then(res => {
      fs.writeFile(`${DEST_DIR}/${destFileName}.js`, res, err => {
        if (err) {
          throw err
        }
      })
    })
    .catch(err => {
      throw err
    })
})

const g = reduce(generatedNav, (acc, n) => acc + templateIndex(n), '')

fs.writeFile(`${DEST_DIR}/index.js`, g, err => {
  if (err) throw err
})
