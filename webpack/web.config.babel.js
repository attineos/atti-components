import merge from 'webpack-merge'

import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

import webpackConfig from './base.config'

export default merge(webpackConfig, {
  entry: {
    '../dist/index': "./src/index.web.js",
    '../helpers/index': "./src/helpers/index.js"
  },
  resolve: {
    extensions: ['.web.js', '.js']
  },
  plugins: [
    new BundleAnalyzerPlugin()
  ]
})
