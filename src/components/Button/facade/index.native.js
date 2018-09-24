// @noSnapshot
import React from 'react'
import Facade from './Facade'
import StyledButton from '../styles/StyledButton'

class ButtonFacade extends Facade {
  render() {
    // eslint-disable-next-line
    const { content, onClick, onPress, title } = this.props

    return <StyledButton onPress={onPress || onClick} title={title || content} />
  }
}

export default ButtonFacade
