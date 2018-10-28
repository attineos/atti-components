const path = require('path')

module.exports = {
  components: 'src/components/**/index.js',
  compilerConfig: {
    transforms: {
      dangerousTaggedTemplateString: true,
    },
  },
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto'
        }
      ]
    }
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguide/Wrapper'),
  },
  skipComponentsWithoutExample: true,
  webpackConfig: {
    resolve: {
      extensions: ['.web.js', '.js']
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
  },
}
