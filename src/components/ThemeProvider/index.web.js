// @noSnapshot

import React from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle, ThemeProvider as TP, withTheme } from 'styled-components'

import constructTheme from './helpers/constructTheme'

const ResetCSS = createGlobalStyle`
  .atti-box * {
    box-sizing: border-box;
  }
  .atti-r-css {
    margin: 0;
    padding: 0;
    border: 0;
    box-shadow: none;
    outline: none;
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
    theme: constructTheme(this.props.otherTheme, this.props.theme),
  }

  render() {
    const { children, theme: propTheme } = this.props
    const { theme } = this.state

    return (
      <TP theme={theme || propTheme}>
        <span className="atti-box">
          <ResetCSS suppressMultiMountWarning />
          {children}
        </span>
      </TP>
    )
  }
}

export default withTheme(ThemeProvider)
