/* eslint react/prop-types: 0 */
import React from 'react'
import Facade from './Facade'
import StyledButton from '../styles/StyledButton'

class ButtonFacade extends Facade {
  render() {
    const { animation, className, content, onClick, onPress, title, type, variance } = this.props

    return (
      <StyledButton
        animation={animation}
        className={className}
        type={type}
        onClick={onClick || onPress}
        variance={variance}
      >
        {content || title}
      </StyledButton>
    )
  }
}

export default ButtonFacade
