import React from 'react'
import { Button, Title, DivHeader, Align } from './style'

class WithRouter extends React.Component {
  componentWillMount() {
    this.setState({ currentURL: window.location.href })
    this.interval = setInterval(() => {
      if (window.location.href !== this.state.currentURL) {
        this.setState({ currentURL: window.location.href })
      }
    }, 10)
  }

  componentWillMount() {
    clearInterval(this.interval)
  }

  render() {
    return this.props.children(window.location)
  }
}

class Header extends React.Component {
  render() {
    return (
      <WithRouter>
        {location => (
          <DivHeader location={location}>
            <Align className="left">
              <Button
                onClick={() => {
                  window.location.href = '/'
                }}
              >
                Home
              </Button>
            </Align>
            <Align className="center">
              <Title
                onClick={() => {
                  window.location.href = '/docs/'
                }}
              >
                Atti-components
              </Title>
            </Align>
            <Align className="right">
              <Button
                onClick={() => {
                  window.location.href = 'https://github.com/attineos/atti-components'
                }}
              >
                GitHub
              </Button>
            </Align>
          </DivHeader>
        )}
      </WithRouter>
    )
  }
}
export default Header
