const path = require('path')

module.exports = [
  {
    name: "mobile",
    output: {
      path: path.resolve(__dirname, "./lib"),
      filename: 'native.js'
    },
    entry: './native/index.js',
    mode: "development",
    resolve: {
      extensions: ['.native.js', '.js']
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
      ]
    },
    externals: {
      react: 'react',
      'react-native': 'react-native',
    }
  }
]
