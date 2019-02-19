import React from 'react'
import PropTypes from 'prop-types'
import { remove, get } from 'lodash'

import Cookies from './helpers/Cookies'
import themes from './config/themes'

import ThemeProvider from '../components/ThemeProvider'

const updateWrappers = []

export const getWrappersToUpdate = () => updateWrappers

class Wrapper extends React.Component {
  static propTypes = {
    /**
     * The child node.
     */
    children: PropTypes.node.isRequired,
  }

  state = {
    selectedTheme: null,
  }

  componentWillMount() {
    updateWrappers.push(this)

    const selectedTheme = Cookies.hasItem('selectedTheme')
      ? Cookies.getItem('selectedTheme')
      : 'default'

    this.state.selectedTheme = get(themes, selectedTheme, null)
  }

  componentWillUnmount() {
    remove(updateWrappers, item => item === this)
  }

  handleSetTheme = newTheme =>
    this.setState(
      {
        selectedTheme: newTheme,
      },
      () => this.forceUpdate(),
    )

  render() {
    const { children } = this.props
    const { selectedTheme } = this.state

    return (
      <ThemeProvider theme={selectedTheme} key={Math.random()}>
        {children}
      </ThemeProvider>
    )
  }
}

export default Wrapper
