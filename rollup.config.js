import alias from 'rollup-plugin-alias'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import replace from 'rollup-plugin-replace'
import { terser } from 'rollup-plugin-terser'

import path, { join } from 'path'
import fs from 'fs'
import { readdirSync } from 'fs-extra'

const NODE_ENV = process.env.NODE_ENV || 'development'
const INDEX_FILE = 'index.js'
const extensions = ['.js']

function removeExt(path) {
  return path.replace(/\.[^.]+$/, '')
}

const componentsEntries = readdirSync('src/components').reduce((components, filename) => {
  const path = join('src/components/', filename)
  let file = ''
  if (fs.existsSync(join(path, INDEX_FILE))) {
    file = join(path, INDEX_FILE)
  } else {
    file = join(path, 'index.js')
  }
  return {
    [removeExt(filename)]: file,
    ...components,
  }
}, {})

const getPlugins = (minify = true) => [
  replace({
    'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
  }),
  babel({
    exclude: 'node_modules/**',
  }),
  alias({
    resolve: ['.js', '/index.js'],
    components: path.join(__dirname, 'src/components'),
    helpers: path.join(__dirname, 'src/helpers'),
  }),
  resolve({ extensions, preferBuiltins: false }),
  commonjs({
    include: 'node_modules/**',
  }),
  peerDepsExternal(),
  process.env.NODE_ENV === 'production' && minify ? terser() : '',
]

const globals = {
  react: 'React',
  'styled-components': 'styled',
}

const conf = []

if (NODE_ENV === 'production') {
  conf.push(
    {
      input: './src/helpers/index.js',
      output: {
        file: './helpers/index.min.js',
        format: 'umd',
        name: 'atti-components/helpers',
        esModule: false,
        globals: globals,
      },
      plugins: getPlugins(),
    },
    {
      input: `./src/${INDEX_FILE}`,
      output: {
        file: './dist/umd/atti-components.min.js',
        format: 'umd',
        name: 'atti-components',
        esModule: false,
        globals: globals,
      },
      plugins: getPlugins(),
    },
    {
      input: {
        index: `src/${INDEX_FILE}`,
        ...componentsEntries,
        themes: 'src/themes/index.js',
      },
      output: [
        {
          dir: './dist/esm',
          format: 'esm',
        },
        {
          dir: './dist/cjs',
          format: 'cjs',
        },
      ],
      plugins: getPlugins(false),
    },
  )
} else {
  conf.push({
    input: `src/${INDEX_FILE}`,
    output: {
      file: './dist/cjs/atti-components.js',
      format: 'cjs',
      name: 'atti-components',
    },
    plugins: getPlugins(false),
  })
}

export default conf
