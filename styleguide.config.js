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
          name: 'Installation',
          content: 'docs/installation.md',
        },
        {
          name: 'Theme',
          content: 'docs/theme.md',
        },
        {
          name: 'Colors',
          content: 'docs/colors.md',
        },
        {
          name: 'Changelog',
          content: 'CHANGELOG.md',
        },
      ],
    }, {
      name: 'Forms',
      components: [
        'src/components/Button/index.js',
        'src/components/CheckBox/index.js',
        'src/components/Input/index.js',
        'src/components/InputFile/index.js',
        'src/components/Radio/index.js',
        'src/components/Select/index.js',
        'src/components/TextArea/index.js',
      ],
    }, {
      name: 'Graphics',
      components: [
        'src/components/Image/index.js',
        'src/components/Loader/index.js',
        'src/components/ProgressBar/index.js',
      ],
    }, {
      name: 'Layout',
      components: [
        'src/components/Cell/index.js',
        'src/components/Container/index.js',
        'src/components/Grid/index.js',
      ],
    }, {
      name: 'Navigation',
      components: [
        'src/components/Breadcrumb/index.js',
        'src/components/Menu/index.js',
        'src/components/Link/index.js',
      ],
    }, {
      name: 'Notifications',
      components: [
        'src/components/Alert/index.js',
        'src/components/Avatar/index.js',
        'src/components/Badge/index.js',
      ],
    }, {
      name: 'Typography',
      components: [
        'src/components/BigText/index.js',
        'src/components/Header1/index.js',
        'src/components/Header2/index.js',
        'src/components/Header3/index.js',
        'src/components/Header4/index.js',
        'src/components/Label/index.js',
        'src/components/SmallText/index.js',
        'src/components/Text/index.js',
      ],
    }, {
      name: 'Providers',
      components: [
        'src/components/ThemeProvider/index.web.js',
      ],
    }, {
      name: 'Others',
      components: [
        'src/components/Option/index.js',
        'src/components/OptionPanel/index.js',
      ],
    }, {
      name: 'Helpers',
      sections: [
        {
          name: 'CSS Helpers',
          content: 'src/helpers/readme.md',
        },
        {
          name: 'CSS Reset',
          content: 'src/components/ResetCSS/readme.md',
        }
      ]
    }
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
