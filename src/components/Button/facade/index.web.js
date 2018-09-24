// @noSnapshot
import React from 'react'
import Facade from './Facade'
import StyledButton from '../styles/StyledButton'

class ButtonFacade extends Facade {
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
