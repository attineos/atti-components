import React from 'react'

import theme from '../theme'

import ThemeProvider from '../components/ThemeProvider'

class Wrapper extends React.Component {
  render() {
    const { children } = this.props

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
  }
}

export default Wrapper
