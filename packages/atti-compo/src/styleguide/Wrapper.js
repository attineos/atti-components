import React from 'react'
import PropTypes from 'prop-types'

import ThemeProvider from '../components/ThemeProvider'
import theme from '../theme'

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
