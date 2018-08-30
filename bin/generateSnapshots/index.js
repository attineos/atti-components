import { forEach, includes, trim } from 'lodash'
import fs from 'fs'
import path from 'path'
import glob from 'glob'

import SnapshotComponent from './SnapshotComponent'
import { mockProp } from './mocks'
import { extractProps, extractKey, extractValue } from './extractor'

/*
 * Folders to ignore.
 */
const ignoreList = 'types|config|tests|theme|__snapshots__|ThemeProvider|'
/*
 * Add this annotation in your file to prevent the script to generate snapshot for this file.
 */
const ignoreAnnotation = '@noSnapshot'

/*
 * Path to components directory.
 */
const componentsDir = 'src/components'

/*
 * Returns true if component's file is an index, false else.
 */
const isIndex = componentPath => includes(componentPath, 'index.js')

const getComponentName = componentPath => trim(path.basename(componentPath), '.js')

const getComponentType = componentPath => path.basename(path.dirname(componentPath))

const getComponentFolder = componentPath => getComponentType(path.dirname(componentPath))

const logComponentSkipped = name =>
  console.log('[info] Component skipped (Abstract, CSS-only, Exception) : ', name)

const logError = (e, name) => console.log(`[error] with: ${name}. Trace: ${e}`)

const logSuccess = name => console.log(`[info] Snapshot created with success for ${name}.`)

/*
 * Write the snapshot test in a test file. Erase the previous content, or create
 * a new file if test doesn't exist.
 */
const writeSnapshotTestInFile = snapshotComponent => {
  const name = snapshotComponent.getName()
  const testsDir = path.join(componentsDir, `${snapshotComponent.getFolder()}/tests`)
  const testsPath = path.join(testsDir, `${name}-snapshot.test.js`)
  !fs.existsSync(testsDir) && fs.mkdirSync(testsDir)
  fs.writeFile(testsPath, snapshotComponent.toString(), err => {
    if (err) {
      printError(err, name)
    } else {
      console.log(`[info] Snapshot created with success for ${name}.`)
    }
  })
}

const addProp = (props, key, value) => `${props}${key}=${value} `

const getKey = propContent => trim(extractKey(propContent), ':')

const getValue = propContent => trim(extractValue(propContent), ',')

const setPropsAndChildren = (snapshotComponent, fileContent) => {
  const propsContent = extractProps(fileContent)
  let props = ''
  let children = ''
  propsContent &&
    forEach(propsContent, propContent => {
      const key = getKey(propContent)
      if (key === 'children') {
        children = mockProp('children')
      } else {
        props = addProp(props, key, mockProp(getValue(propContent)))
      }
    })
  snapshotComponent.setProps(props)
  snapshotComponent.setChildren(children)
}

/*
 * ---------------------------- Main Script ------------------------------------
 * Iterate over each component, read it, extract its props and create
 * component-snapshot.test.js file in component/tests folder.
 */
glob(`${componentsDir}/**/!(${ignoreList})/*.js`, (err, files) => {
  forEach(files, file => {
    let snapshotComponent = isIndex(file)
      ? new SnapshotComponent('index', getComponentType(file))
      : new SnapshotComponent(
          getComponentType(file),
          getComponentName(file),
          getComponentFolder(file),
        )
    try {
      const fileContent = fs.readFileSync(file, 'utf-8')
      if (fileContent.includes(ignoreAnnotation)) {
        logComponentSkipped(snapshotComponent.getName())
        return
      }

      setPropsAndChildren(snapshotComponent, fileContent)
      writeSnapshotTestInFile(snapshotComponent)
    } catch (e) {
      logError(e, snapshotComponent.getName())
    }
  })
})
