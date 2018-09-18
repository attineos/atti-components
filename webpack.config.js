const path = require('path')

module.exports = [
  {
    entry: {
      'dist/index': "./src/index.web.js",
      'native/index': "./src/index.native.js"
    },
    output: {
      path: path.resolve(__dirname, ''),
      filename: '[name].js',
      library: '',
      libraryTarget: 'commonjs2'
    },
    mode: "production",
    resolve: {
      extensions: ['.js']
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: ['env', 'react'],
            plugins: ['babel-plugin-transform-class-properties', 'babel-plugin-styled-components']
          }
        },
      ]
    },
    externals: {
      react: 'commonjs react',
      'react-dom': 'commonjs react-dom',
      'react-native': 'commonjs react-native',
      'styled-components': 'commonjs styled-components',
    }
  }
]
