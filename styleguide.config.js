const { camelCase, upperFirst } = require('lodash')
const path = require('path')
const fs = require('fs')
const { differenceWith, flatten } = require('lodash')

const TITLE = 'atti-components'

// You have to modify the object below if you want to add a component in a section.
const listComponents = {"input": ['Button', 'Checkbox', 'Radio', 'Select', 'Textarea'],
    "links": ['Link', 'Menu'],
    "tools": ['ThemeProvider'],
    "typographies": ['BigText', 'Header1', 'Header2', 'Header3', 'SmallText', 'Text']
}

const listSections = [
  {
    name: 'Input components',
    components: () => [`src/components/+(${listComponents["input"].join('|')})/index.js`],
    sectionDepth: 1
  },
  {
    name: 'Links',
    components: () => [`src/components/+(${listComponents["links"].join('|')})/index.js`],
    sectionDepth: 1
  },
  {
    name: 'Tools', components: () => [`src/components/+(${listComponents["tools"].join('|')})/index.js`],
    sectionDepth: 1
  },
  {
    name: 'Typographies',
    components: () => [`src/components/+(${listComponents["typographies"].join('|')})/index.js`],
    sectionDepth: 1
  },
  {
    name:'Theme',
    content: 'src/styleguide/Theme.md',
    sectionDepth: 1
  },
]

function addUnclassifiedComponents(sections) {
  let data = fs.readFileSync(path.join(__dirname, 'src/styleguide/listComponents.txt'), "utf8")
  const components = data.split("\n")
  const keys = Object.keys(listComponents)
  const alreadyClassifiedComponents = flatten(keys.map(elt => listComponents[elt]))
  const difference = differenceWith(components, alreadyClassifiedComponents, (a,b) => a === b)
  if (difference.length > 0){
    sections.push({name: 'unclassified', components: () => [`src/components/+(${difference.join('|')})/index.js`], sectionDepth: 1})
  }
  return sections
}

const sectionsWithUnclassified = addUnclassifiedComponents(listSections)

module.exports = {
  title: `${TITLE} - Documentation`,
  pagePerSection: true,
  components: 'src/components/!(theme)/Readme.md',
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
  sections: sectionsWithUnclassified,
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
