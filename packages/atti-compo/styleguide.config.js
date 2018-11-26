const { camelCase, upperFirst } = require('lodash')
const path = require('path')

const TITLE = 'atti-components'

module.exports = {
  title: `${TITLE}`,
  pagePerSection: true,
  components: 'src/components/!(theme)/Readme.md',
  compilerConfig: {
    transforms: {
      dangerousTaggedTemplateString: true,
    },
  },
  getComponentPathLine(filePath) {
    const componentDirName = path.dirname(filePath);
    const componentSourcesFilesName = componentDirName.split(path.sep).pop();
    const componentName = upperFirst(camelCase(componentSourcesFilesName));
    return `import { ${componentName} } from '${TITLE}'`
  },
  template: {
    favicon: 'favicon.png',
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto',
        },
      ],
    },
  },
  theme: {
    color: {
      linkHover: '#666',
      link: '#333',
    }
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
    StyleGuideRenderer: path.join(__dirname, 'src/styleguide/StyleGuideRenderer'),
  },
  skipComponentsWithoutExample: true,
  webpackConfig: {
    resolve: {
      extensions: ['.web.js', '.js'],
      alias: {
        helpers: path.join(__dirname, 'src/helpers/')
      }
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
