// @noSnapshot
import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as StyledThemeProvider, withTheme } from 'styled-components'
import GlobalStyle from './styles/GlobalStyle'

import constructTheme from './helpers/constructTheme'

const ThemeProvider = ({ children, otherTheme, theme: propsTheme }) => {
  const theme = useMemo(() => constructTheme(otherTheme, propsTheme), [otherTheme, propsTheme])

  return (
    <StyledThemeProvider theme={theme || propsTheme}>
      <span className="atti-box">
        <GlobalStyle />
        {children}
      </span>
    </StyledThemeProvider>
  )
}

ThemeProvider.propTypes = {
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

ThemeProvider.defaultProps = {
  otherTheme: {},
  theme: {},
}

export default withTheme(ThemeProvider)
