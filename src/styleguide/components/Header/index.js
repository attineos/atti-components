import React from 'react'
import { Button, Title, DivHeader, Align, Gitspan } from './style'
class Header extends React.Component {
  render() {
    return (
      <DivHeader>
        <Align className="left" />
        <Align className="center">
          <Title>Atti-components</Title>
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
