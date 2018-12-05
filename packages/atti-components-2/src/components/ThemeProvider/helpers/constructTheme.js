import { isFunction, keys, merge, reduce, replace } from 'lodash'

/**
 * Construct the theme by merging the theme and the otherTheme props and applying all the functions on the
 * constant part of the theme.
 */
const constructTheme = (otherTheme, theme) => {
  // Separate a theme into two groups : the functions and the constants part.
  const partition = theme =>
    reduce(
      keys(theme),
      (acc, key) => {
        const value = theme[key]
        acc[isFunction(value) ? 'functions' : 'constants'][key] = value
        return acc
      },
      { constants: {}, functions: {} },
    )

  // Apply the functions one after another with the constants as parameter.
  // Insert into the accumulator a value with the function key without the 'Factory' block.
  const applyFunctions = (constants, functions) =>
    reduce(
      keys(functions),
      (acc, key) => {
        acc[replace(key, 'Factory', '')] = functions[key](constants)
        return acc
      },
      {},
    )

  // Separate the theme and the otherTheme.
  const separatedTheme = partition(theme)
  const separatedOtherTheme = partition(otherTheme)
  // Merge the constants and the functions together.
  const { constants, functions } = merge({}, separatedTheme, separatedOtherTheme)

  // Create the theme to give to our children.
  return merge(
    {},
    // Keep the functions in case we need them in another ThemeProvider lower in the ReactDOM tree.
    functions,
    // Keep the constants part of the theme.
    separatedTheme.constants,
    // Eventually override it with the new result of the functions.
    applyFunctions(constants, functions),
    // Apply the overrides of otherTheme.
    separatedOtherTheme.constants,
  )
}

export default constructTheme
