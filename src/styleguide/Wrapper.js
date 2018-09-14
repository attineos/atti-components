import React from 'react'
import PropTypes from 'prop-types'

import DynamicTheme from './DynamicTheme'

import ThemeProvider from '../components/ThemeProvider'

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

  state = {
    theme: DynamicTheme.getTheme(),
  }

  /**
   * When we instanciate a Wrapper it subscribes to the DynamicTheme class, to be re-rendered when there is a change.
   */
  componentDidMount() {
    DynamicTheme.addSubscriber(this.setTheme)
  }

  /**
   * When we unmount the component, we unsubscribe, i.e we delete the subscriber.
   */
  componentWillUnmount() {
    DynamicTheme.removeSubscriber(this.setTheme)
  }

  /**
   * Take a new theme into argument and replace the old one, which was in the state of the Wrapper.
   * @param newTheme - the value which will be attributed to the state.
   */
  setTheme = newTheme => {
    this.setState({
      theme: newTheme,
    })
  }

  render() {
    const { children } = this.props
    const { theme } = this.state
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
  }
}

export default Wrapper
