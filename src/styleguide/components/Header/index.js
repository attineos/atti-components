import React from 'react'
import { Button, Title, DivHeader, Align } from './style'
class Header extends React.Component {
  render() {
    return (
      <DivHeader>
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
    )
  }
}
export default Header
