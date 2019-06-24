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
  require: [path.resolve(__dirname, 'styleguide/setup.js')],
  getComponentPathLine(filePath) {
    const componentDirName = path.dirname(filePath)
    const componentSourcesFilesName = componentDirName.split(path.sep).pop()
    const componentName = upperFirst(camelCase(componentSourcesFilesName))
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
    },
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
          name: 'Usage',
          content: 'docs/usage.md',
        },
        {
          name: 'Theme',
          content: 'docs/theme.md',
        },
        {
          name: 'Demo',
          content: 'docs/demo.md',
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
    },
    {
      name: 'Forms',
      components: [
        'src/components/Typography/FormText/index.js',
        'src/components/Button/index.js',
        'src/components/CheckBox/index.js',
        'src/components/Input/index.js',
        'src/components/InputFile/index.js',
        'src/components/InputGroup/index.js',
        'src/components/Radio/index.js',
        'src/components/Select/index.js',
        'src/components/TextArea/index.js',
      ],
    },
    {
      name: 'Table',
      components: ['src/components/Table/index.js'],
    },
    {
      name: 'Graphics',
      components: [
        'src/components/Image/index.js',
        'src/components/Loader/index.js',
        'src/components/ProgressBar/index.js',
      ],
    },
    {
      name: 'Layout',
      components: [
        'src/components/Cell/index.js',
        'src/components/Container/index.js',
        'src/components/Grid/index.js',
      ],
    },
    {
      name: 'Navigation',
      components: [
        'src/components/Breadcrumb/index.js',
        'src/components/Menu/index.js',
        'src/components/Link/index.js',
      ],
    },
    {
      name: 'Notifications',
      components: [
        'src/components/Alert/index.js',
        'src/components/Avatar/index.js',
        'src/components/Badge/index.js',
        'src/components/Tooltip/index.js',
      ],
    },
    {
      name: 'Typographies',
      components: [
        'src/components/Typographies/Typography/index.js',
        'src/components/Typographies/BigText/index.js',
        'src/components/Typographies/Header1/index.js',
        'src/components/Typographies/Header2/index.js',
        'src/components/Typographies/Header3/index.js',
        'src/components/Typographies/Header4/index.js',
        'src/components/Typographies/Label/index.js',
        'src/components/Typographies/SmallText/index.js',
        'src/components/Typographies/Text/index.js',
      ],
    },
    {
      name: 'Providers',
      components: ['src/components/ThemeProvider/index.web.js'],
    },
    {
      name: 'Others',
      components: [
        'src/components/Modal/index.js',
        'src/components/Option/index.js',
        'src/components/OptionPanel/index.js',
      ],
    },
    {
      name: 'Helpers',
      sections: [
        {
          name: 'CSS Helpers',
          content: 'src/helpers/readme.md',
        },
      ],
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
        components: path.join(__dirname, 'src/components/'),
        helpers: path.join(__dirname, 'src/helpers/'),
      },
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
