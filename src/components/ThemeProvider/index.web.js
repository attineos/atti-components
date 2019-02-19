// @noSnapshot
import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as StyledThemeProvider, withTheme } from 'styled-components'
import ResetCSS from '../ResetCSS'

import constructTheme from './helpers/constructTheme'

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
    /**
     * Do not inject the ResetCSS code.
     * This code is needed because browser add some base CSS to some elements, and we just want to clear it
     */
    suppressResetCss: PropTypes.bool,
  }

  static defaultProps = {
    otherTheme: {},
    theme: {},
    suppressResetCss: false,
  }

  state = {
    /**
     * The theme which will be given to our children.
     * Only calculated once, on the construction of the component.
     */
    theme: constructTheme(this.props.otherTheme, this.props.theme),
  }

  render() {
    const { children, theme: propTheme, suppressResetCss } = this.props
    const { theme } = this.state

    return (
      <StyledThemeProvider theme={theme || propTheme}>
        <span className="atti-box">
          {!suppressResetCss && <ResetCSS suppressMultiMountWarning />}
          {children}
        </span>
      </StyledThemeProvider>
    )
  }
}

export default withTheme(ThemeProvider)
