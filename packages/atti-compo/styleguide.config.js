const path = require('path')

module.exports = {
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
          href: 'https://fonts.googleapis.com/css?family=Roboto',
        },
      ],
    },
  },
  sections: [
    {
      name: 'Introduction',
      sections: [
        {
          name: 'Theme',
          content: 'docs/theme.md',
        },
        {
          name: 'Colors',
          content: 'docs/colors.md',
        },
      ],
    },
    {
      name: 'Components',
      components: 'src/components/**/index.js',
    },
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguide/Wrapper'),
  },
  skipComponentsWithoutExample: true,
  webpackConfig: {
    resolve: {
      extensions: ['.web.js', '.js'],
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
