// @noSnapshot

import React from 'react'
import PropTypes from 'prop-types'
import { isFunction, keys, merge, reduce, replace } from 'lodash'
import { createGlobalStyle, ThemeProvider as TP, withTheme } from 'styled-components'

const ResetCSS = createGlobalStyle`
  .atti-r-css {
    margin: 0;
    padding: 0;
    border: 0;
    box-shadow: none;
    outline: none;
    box-sizing: border-box;
  }
`

class ThemeProvider extends React.Component {
  static propTypes = {
    /**
     * The child node.
     */
    children: PropTypes.node.isRequired,
    /**
     * Overload a part of the theme. Will be merged to the actual theme.
     * The overload can be constants, or functions taking the constant part of the theme as parameter.
     */
    otherTheme: PropTypes.object,
    /**
     * The theme overloading. If not given, the theme will be taken from the context.
     * The overload can be constants, or functions taking the constant part of the theme as parameter.
     */
    theme: PropTypes.object,
  }

  static defaultProps = {
    otherTheme: {},
    theme: {},
  }

  state = {
    /**
     * The theme which will be given to our children.
     * Only calculated once, on the construction of the component.
     */
    theme: this.constructTheme(),
  }

  /**
   * Construct the theme by merging the theme and the otherTheme props and applying all the functions on the
   * constant part of the theme.
   */
  constructTheme() {
    const { otherTheme, theme } = this.props

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

  render() {
    const { children, theme: propTheme } = this.props
    const { theme } = this.state

    return (
      <TP theme={theme || propTheme}>
        <React.Fragment>
          <ResetCSS suppressMultiMountWarnings />
          {children}
        </React.Fragment>
      </TP>
    )
  }
}

export default withTheme(ThemeProvider)
