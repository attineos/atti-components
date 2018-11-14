import React from 'react'
import PropTypes from 'prop-types'

import ThemeProvider from '../components/ThemeProvider'
import theme from '../theme'

/**
 * The wrapper will subscribe to a static class name DynamicTheme to enable the theme to be modify.
 */
class Wrapper extends React.Component {
  static propTypes = {
    /**
     * The child node.
     */
    children: PropTypes.node.isRequired,
  }

  render() {
    const { children } = this.props
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
  }
}

export default Wrapper
