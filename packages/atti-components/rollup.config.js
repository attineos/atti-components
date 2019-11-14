import alias from 'rollup-plugin-alias'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import replace from 'rollup-plugin-replace'
import { terser } from 'rollup-plugin-terser'

import path from 'path'

const NODE_ENV = process.env.NODE_ENV || 'development'
const extensions = ['.js']

const plugins = [
  replace({
    'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
  }),
  babel({
    exclude: ['/node_modules/'],
  }),
  alias({
    resolve: ['.js', '/index.js'],
    components: path.join(__dirname, 'src/components'),
    helpers: path.join(__dirname, 'src/helpers'),
  }),
  resolve({ extensions, preferBuiltins: false }),
  commonjs({
    include: ['node_modules/**', '../../node_modules/**'],
  }),
  peerDepsExternal(),
  terser(),
]

const globals = {
  react: 'React',
  'styled-components': 'styled',
}

export default [
  {
    input: './src/helpers/index.js',
    output: {
      file: './dist/umd/helpers/index.min.js',
      format: 'umd',
      name: 'atti-components/helpers',
      esModule: false,
      globals: globals,
    },
    plugins,
  },
  {
    input: 'src/index.js',
    output: {
      file: './dist/umd/atti-components.min.js',
      format: 'umd',
      name: 'atti-components',
      esModule: false,
      globals: globals,
    },
    plugins,
  },
]
