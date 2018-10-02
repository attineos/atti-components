import prompts from 'prompts'
import fs from 'fs'

// Template to create files.
import templateMainFile from './templateMainFile'
import templateSubFolderIndexFile from './templateSubFolderIndexFile'
import templateThemeFolderIndexFile from './templateThemeFolderIndexFile'

// Constants.
const CONFIG_FOLDER = 'config'
const COMPONENTS_FOLDER = 'components'
const FACADE_FOLDER = 'facade'
const STYLES_FOLDER = 'styles'
const TESTS_FOLDER = 'tests'
const THEME_FOLDER = 'theme'
const ALL_FOLDERS = [
  CONFIG_FOLDER,
  COMPONENTS_FOLDER,
  FACADE_FOLDER,
  STYLES_FOLDER,
  TESTS_FOLDER,
  THEME_FOLDER,
]
const FOLDERS_WITH_INDEX = [COMPONENTS_FOLDER, FACADE_FOLDER, STYLES_FOLDER, THEME_FOLDER]
const TEMPLATES_FOR_INDEX = {
  [COMPONENTS_FOLDER]: templateSubFolderIndexFile,
  [FACADE_FOLDER]: templateSubFolderIndexFile,
  [STYLES_FOLDER]: templateSubFolderIndexFile,
  [THEME_FOLDER]: templateThemeFolderIndexFile,
}

// Component folder.
const componentDir = 'src/components'

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
      { title: CONFIG_FOLDER, value: CONFIG_FOLDER },
      { title: COMPONENTS_FOLDER, value: COMPONENTS_FOLDER },
      { title: FACADE_FOLDER, value: FACADE_FOLDER },
      { title: STYLES_FOLDER, value: STYLES_FOLDER, selected: true },
      { title: TESTS_FOLDER, value: TESTS_FOLDER },
      { title: THEME_FOLDER, value: THEME_FOLDER, selected: true },
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

  // Test if the component folder already exists.
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
      fs.writeFileSync(
        `${compoDir}/${folder}/index.js`,
        TEMPLATES_FOR_INDEX[folder](componentName),
        err => {
          if (err) {
            console.error(err)
          }
        },
      )
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
    const created = await createFolders({ componentName: name, folders })
    if (created) {
      console.log(
        "Component created. Don't forget to add your component theme into src/theme/componentsFactory.js.",
      )
    } else {
      process.exit(1)
    }
  } else {
    // No confirmation for user, cancel the creation.
    console.log('Creation cancelled.')
  }

  process.exit(0)
})()
