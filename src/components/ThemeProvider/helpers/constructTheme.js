import { merge, reduce } from 'lodash'

/**
 * Construct the theme by merging the theme and the otherTheme props and applying all the functions on the
 * constant part of the theme.
 */
const constructTheme = (otherTheme, theme) => {
  // Separate a theme into two groups : the functions and the constants part.
  const partition = theme => ({
    constants: theme,
    functions: theme.factories,
  })

  // Apply the functions one after another with the constants as parameter.
  // Insert into the accumulator a value with the function key without the 'Factory' block.
  const applyFunctions = (constants, functions) =>
    reduce(
      functions,
      (acc, value) => {
        acc[value.name] = value.factory(constants)
        return acc
      },
      constants,
    )

  // Compute first theme by taking constants and applying functions
  const firstLevelTheme = partition(theme)
  const firstLevelComputedTheme = applyFunctions(
    firstLevelTheme.constants,
    firstLevelTheme.functions,
  )

  // Compute second level theme, by taking the full first level theme, then adding second theme constants
  // Then reexecuting both theme factories
  const secondLevelTheme = partition(otherTheme)
  const intermediateTheme = merge({}, firstLevelComputedTheme, secondLevelTheme.constants)
  const secondLevelComputedTheme = applyFunctions(
    merge(applyFunctions(intermediateTheme, firstLevelTheme.functions), secondLevelTheme.constants),
    secondLevelTheme.functions,
  )

  return secondLevelComputedTheme
}

export default constructTheme
