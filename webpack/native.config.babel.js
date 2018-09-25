import merge from 'webpack-merge'

// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

import webpackConfig from './base.config'

export default merge(webpackConfig, {
  entry: {
    '../native/index': "./src/index.native.js"
  },
  resolve: {
    extensions: ['.native.js', '.js']
  },
  plugins: [
    // new BundleAnalyzerPlugin()
  ]
})
