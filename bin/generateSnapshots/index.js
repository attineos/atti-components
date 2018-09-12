import { forEach, includes, trim } from 'lodash'
import fs from 'fs'
import path from 'path'
import glob from 'glob'

import SnapshotComponent from './SnapshotComponent'
import { mockArrayProp, mockProp } from './mocks'
import { extractArrayOfValue,  extractChildrenValue, extractKey, extractOneOfValue, extractProps, extractValue, isArrayOfProp, isOneOfProp } from './extractor'

/*
 * Folders to ignore.
 */
const ignoreList = 'types|config|tests|theme|__snapshots__|'
/*
 * Add this annotation in your file to prevent the script to generate snapshot for this file.
 */
const ignoreAnnotation = '@noSnapshot'

/*
 * Path to components directory.
 */
const componentsDir = 'src/components'

/*
 * Returns true if component's file is an index, false else.
 */
const isIndex = componentPath => includes(componentPath, 'index.js')

/*
 * Returns the component's name.
 */
const getComponentName = componentPath => trim(path.basename(componentPath), '.js')

/*
 * Returns the component type (components or styles).
 */
const getComponentType = componentPath => path.basename(path.dirname(componentPath))

/*
 * Returns the component folder.
 */
const getComponentFolder = componentPath => getComponentType(path.dirname(componentPath))

/*
 * Logs info about the component skipped.
 */
const logComponentSkipped = name => console.log('[info] Component skipped: ', name)

/*
 * Logs the error that occured for the component.
 */
const logError = (e, name) => console.log(`[error] with: ${name}. Trace: ${e}`)

/*
 * Log info about the test created for the component.
 */
const logSuccess = name => console.log(`[info] Snapshot created with success for ${name}.`)

/*
 * Write the snapshot test in a test file. Erase the previous content, or create
 * a new file if test doesn't exist.
 */
const writeSnapshotTestInFile = snapshotComponent => {
  const name = snapshotComponent.getName()
  const testsDir = path.join(componentsDir, `${snapshotComponent.getFolder()}/tests`)
  const testPath = path.join(testsDir, `${name}-snapshot.test.js`)
  !fs.existsSync(testsDir) && fs.mkdirSync(testsDir)
  fs.writeFile(testPath, snapshotComponent.toString(), err => {
    if (err) {
      logError(err, name)
    } else {
      logSuccess(name)
    }
  })
}

/*
 * Returns the concatened props in a string.
 */
const addProp = (props, key, value) => `${props}${key}=${value} `

/*
 * Returns the extracted string prop's key.
 */
const getKey = propContent => trim(extractKey(propContent), ':')

/*
 * Returns the extracted string prop's value.
 */
const getValue = propContent => trim(extractValue(propContent), ',')

const getArrayOfValue = propContent => trim(propContent, '()')

const getOneOfValue = propContent => trim(propContent, '[')

/*
 * Extracts the props from the raw file content, extracts the keys/values and
 * sets the props and children properties of snapshotComponent object.
 */
const setPropsAndChildren = (snapshotComponent, fileContent) => {
  const propsContent = extractProps(fileContent)
  let props = ''
  let children = ''
  propsContent &&
    forEach(propsContent, propContent => {
      const key = getKey(propContent)
      if (isArrayOfProp(propContent)) {
        props = addProp(props, key, mockArrayProp(
          getArrayOfValue(extractArrayOfValue(propContent)))
        )
      } else if (isOneOfProp(propContent)) {
        props = addProp(props, key, getOneOfValue(extractOneOfValue(propContent)))
      } else {
        const value = mockProp(getValue(propContent))
        if (key === 'children') {
          children = extractChildrenValue(value)
        } else {
          props = addProp(props, key, mockProp(getValue(propContent)))
        }
      }
    })
  snapshotComponent.setProps(props)
  snapshotComponent.setChildren(children)
}

/*
 * ---------------------------- Main Script ------------------------------------
 * Iterate over each component, read it, extract its props and create
 * component-snapshot.test.js file in component/tests folder.
 */
glob(`${componentsDir}/**/!(${ignoreList})/*.js`, (err, files) => {
  forEach(files, file => {
    const snapshotComponent = isIndex(file)
      ? new SnapshotComponent('index', getComponentType(file))
      : new SnapshotComponent(
          getComponentType(file),
          getComponentName(file),
          getComponentFolder(file),
        )
    try {
      const fileContent = fs.readFileSync(file, 'utf-8')
      if (fileContent.includes(ignoreAnnotation)) {
        logComponentSkipped(snapshotComponent.getName())
        return
      }

      setPropsAndChildren(snapshotComponent, fileContent)
      writeSnapshotTestInFile(snapshotComponent)
    } catch (e) {
      logError(e, snapshotComponent.getName())
    }
  })
})
