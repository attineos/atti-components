const path = require('path')
const upperCamelCase = require('uppercamelcase')

const TITLE = 'atti-components'

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
      baseBackground: '#bdd5ea',
      sidebarBackground: '#577399',
      link: '#f7f7ff',
    }
  },
  getComponentPathLine(filePath) {
    const componentDirName = path.dirname(filePath);
    const componentSourcesFilesName = componentDirName.split(path.sep).pop();
    const componentName = upperCamelCase(componentSourcesFilesName);
    return `import ${componentName} from '${TITLE}'`
  },
  sections: [
    {name: 'Input components', components: () => ['src/components/+(Button|Checkbox|Radio|Select|Textarea)/index.js'], sectionDepth: 1},
    {name: 'Links', components: () => ['src/components/+(Link|Menu)/index.js'], sectionDepth: 1},
    {name: 'Tools', components: () => ['src/components/+(ThemeProvider)/index.js'], sectionDepth: 1},
    {name: 'Typographies', components: () => ['src/components/+(BigText|Header1|Header2|Header3|SmallText|Text)/index.js'], sectionDepth: 1},
    {name:'Theme', content: 'src/styleguide/Theme.md', sectionDepth: 1},
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguide/Wrapper'),
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
/*
other theme that we could use :
theme: {
    color: {
      linkHover: '#3a76fd',
      baseBackground: '#bffff1',
      sidebarBackground: '#379634',
      link: '#74F2ce',
    }
  },
 */