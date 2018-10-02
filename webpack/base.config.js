const path = require('path')

export default {
  output: {
    path: path.resolve(__dirname, ''),
    filename: '[name].js',
    library: '',
    libraryTarget: 'commonjs2'
  },
  mode: "production",
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
