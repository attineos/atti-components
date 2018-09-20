import React from 'react'
import StyledButton from '../styles/StyledButton'

class ButtonFacade extends React.Component {
  render() {
    // eslint-disable-next-line
    const { content, onClick, onPress, title } = this.props

    return (
      <StyledButton type="button" onClick={onClick || onPress}>
        {content || title}
      </StyledButton>
    )
  }
}

export default ButtonFacade
