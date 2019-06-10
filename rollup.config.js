import alias from 'rollup-plugin-alias'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import { terser } from 'rollup-plugin-terser'
import { sizeSnapshot } from 'rollup-plugin-size-snapshot'

const path = require('path')

const NODE_ENV = process.env.NODE_ENV || 'development'
const outputFile = NODE_ENV === 'production' ? './dist/prod.js' : './dist/dev.js'
const extensions = ['.web.js', '.js']

export default {
  input: './src/index.web.js',
  output: {
    file: outputFile,
    format: 'umd',
    name: 'atti-components',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      'styled-components': 'styled',
    },
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    alias({
      resolve: ['.web.js', '.js', '/index.js'],
      components: path.join(__dirname, 'src/components'),
      helpers: path.join(__dirname, 'src/helpers'),
    }),
    resolve({ extensions }),
    commonjs(),
    sizeSnapshot({ snapshotPath: 'size-snapshot.json' }),
    process.env.NODE_ENV === 'production' && terser(),
  ],
  external: id => /^react|react-dom|styled-components/.test(id),
}
