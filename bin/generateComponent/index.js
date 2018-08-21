import prompts from 'prompts'
import fs from 'fs'

// Template to create files.
import templateMainFile from './templateMainFile'
import templateComponentsThemeFile from './templateComponentsThemeFile'
import templateComponentTheme from './templateComponentTheme'
import templateSubFolderIndexFile from './templateSubFolderIndexFile'

// Constants.
const CONFIG_FOLDER = 'config'
const COMPONENTS_FOLDER = 'components'
const STYLES_FOLDER = 'styles'
const TESTS_FOLDER = 'tests'
const ALL_FOLDERS = [CONFIG_FOLDER, COMPONENTS_FOLDER, STYLES_FOLDER, TESTS_FOLDER]
const FOLDERS_WITH_INDEX = [COMPONENTS_FOLDER, STYLES_FOLDER]

// Component folder.
const componentDir = 'src/components'
// Theme folder.
const themeDir = 'src/themes'
// The file where is the components theme.
const themeComponentsFile = `${themeDir}/components.js`

// The regex to get the theme in the components theme.
const themeComponentsRegex = /const components = ({[\S\s]*})\s*export default components/g

// The questions to ask to the user to get details about the component.
const questions = [
  {
    format: val => val.replace(/^\w|\s\w/g, c => c.trim().toUpperCase()),
    message: 'Component name ?',
    name: 'name',
    type: 'text',
  },
  {
    choices: [
      { title: CONFIG_FOLDER, value: 'config' },
      { title: COMPONENTS_FOLDER, value: 'components' },
      { title: STYLES_FOLDER, value: 'styles', selected: true },
      { title: TESTS_FOLDER, value: 'tests' },
    ],
    hint: '- Space to select. Return to submit',
    initial: 1,
    message: 'Pick required folders',
    name: 'folders',
    type: 'multiselect',
  },
  {
    active: 'yes',
    inactive: 'no',
    initial: true,
    message: (_, values) => `Confirm the creation of component ${values.name} ?`,
    name: 'confirmation',
    type: 'toggle',
  },
]

/**
 * Verify the provided answers.
 */
async function verifyAnswers(answers) {
  const { folders, name } = answers

  if (!name) {
    console.log(`Incorrect name for the component : ${name}`)
    return false
  }

  if (!folders.every(folder => ALL_FOLDERS.includes(folder))) {
    console.log('Unknown folder name.')
    return false
  }

  return true
}

/**
 * Create the folders for the new component.
 */
async function createFolders(payload) {
  const { componentName, folders } = payload

  const compoDir = `${componentDir}/${componentName}`

  // Test if the folder already exists.
  if (fs.existsSync(compoDir)) {
    console.error(`The component ${componentName} already exists.`)
    return false
  }

  // Create the component directory.
  fs.mkdirSync(compoDir)
  // Create all subfolders.
  folders.forEach(folder => {
    fs.mkdirSync(`${compoDir}/${folder}`)

    // If the folder requires an index.js, create one.
    if (FOLDERS_WITH_INDEX.includes(folder)) {
      fs.writeFileSync(`${compoDir}/${folder}/index.js`, templateSubFolderIndexFile(), err => {
        if (err) {
          console.error(err)
        }
      })
    }
  })

  // Create the index.js file.
  fs.writeFileSync(`${compoDir}/index.js`, templateMainFile(componentName), err => {
    if (err) {
      console.error(err)
    }
  })

  return true
}

/**
 * Sort the key of an object using alphabetical order.
 */
function sortObject(obj) {
  const sortedObj = {}
  Object.keys(obj)
    .sort()
    .forEach(key => {
      sortedObj[key] = obj[key]
    })

  return sortedObj
}

/**
 * Add the new component to the theme.
 */
async function addToTheme(payload) {
  const { componentName } = payload

  if (!fs.existsSync(themeDir)) {
    // Create the theme directory if it doesn't exist.
    fs.mkdirSync(themeDir)
  }

  if (!fs.existsSync(themeComponentsFile)) {
    // Create the components theme file.
    fs.writeFileSync(themeComponentsFile, templateComponentsThemeFile(JSON.stringify({})), err => {
      if (err) {
        console.error(err)
      }
    })
  }

  // Get the theme content.
  const fileContent = fs.readFileSync(themeComponentsFile, 'utf-8')
  const match = themeComponentsRegex.exec(fileContent)
  let componentsTheme = null
  if (match) {
    match.forEach((group, groupIndex) => {
      if (groupIndex === 1) {
        componentsTheme = JSON.parse(JSON.stringify(eval(`(${group})`)))
      }
    })
  }

  if (!componentsTheme) {
    console.error('Unable to parse the components theme.')
    return false
  }

  // Add the part for the component add convert it to the file again.
  componentsTheme[componentName] = templateComponentTheme()
  // Sort the theme.
  const sortedComponentsTheme = sortObject(componentsTheme)
  const componentsThemeToStr = JSON.stringify(sortedComponentsTheme).replace(
    /\"([^(\")"]+)\":/g,
    '$1:',
  )

  fs.writeFileSync(themeComponentsFile, templateComponentsThemeFile(componentsThemeToStr), err => {
    if (err) {
      console.error(err)
    }
  })

  return true
}

/**
 * Launch the component generation.
 */
;(async function generate() {
  // Get the details about the component to create.
  const answers = await prompts(questions)

  // Verify the answers.
  if (!(await verifyAnswers(answers))) {
    process.exit(1)
  }

  const { confirmation, folders, name } = answers

  if (confirmation) {
    // Create the folders and modify the theme to add the new component.
    const created =
      (await createFolders({ componentName: name, folders })) &&
      (await addToTheme({ componentName: name }))
    if (created) {
      console.log('Component created.')
    } else {
      process.exit(1)
    }
  } else {
    // No confirmation for user, cancel the creation.
    console.log('Creation cancelled.')
  }

  process.exit(0)
})()
