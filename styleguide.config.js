const { camelCase, upperFirst } = require('lodash')
const path = require('path')

const TITLE = 'atti-components'

const listSections = [
  {
    name: 'Input components',
    components: () => {
      const listComponents = ['Button', 'Checkbox', 'Radio', 'Select', 'Textarea']
      return [`src/components/+(${listComponents.join('|')})/index.js`]
    },
    sectionDepth: 1
  },
  {
    name: 'Links',
    components: () => {
      const listComponents = ['Link', 'Menu']
      return [`src/components/+(${listComponents.join('|')})/index.js`]
    },
    sectionDepth: 1
  },
  {
    name: 'Tools', components: () => {
      const listComponents = ['ThemeProvider']
      return [`src/components/+(${listComponents.join('|')})/index.js`]
    },
    sectionDepth: 1
  },
  {
    name: 'Typographies',
    components: () => {
      const listComponents = ['BigText', 'Header1', 'Header2', 'Header3', 'SmallText', 'Text']
      return [`src/components/+(${listComponents.join('|')})/index.js`]
    },
    sectionDepth: 1
  },
  {
    name:'Theme',
    content: 'src/styleguide/Theme.md',
    sectionDepth: 1
  },
]

module.exports = {
  title: `${TITLE} - Documentation`,
  pagePerSection: true,
  components: 'src/components/!(theme)/index.js',
  compilerConfig: {
    transforms: {
      dangerousTaggedTemplateString: true,
    },
  },
  theme: {
    color: {
      linkHover: '#fe5f55',
      link: '#f7f7ff',
    }
  },
  getComponentPathLine(filePath) {
    const componentDirName = path.dirname(filePath);
    const componentSourcesFilesName = componentDirName.split(path.sep).pop();
    const componentName = upperFirst(camelCase(componentSourcesFilesName));
    return `import ${componentName} from '${TITLE}'`
  },
  sections: listSections,
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguide/Wrapper'),
    StyleGuideRenderer: path.join(__dirname, 'src/styleguide/StyleGuideRenderer'),
  },
  template: {
    favicon: 'favicon.png',
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto',
        }
      ],
    },
  },
  webpackConfig: {
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