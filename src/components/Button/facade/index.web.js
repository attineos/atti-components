/* eslint react/prop-types: 0 */
import React from 'react'
import Facade from './Facade'
import StyledButton from '../styles/StyledButton'

class ButtonFacade extends Facade {
  render() {
    const { className, content, onClick, onPress, title, type, primary, secondary } = this.props

    const styleLevel = primary ? 'primary' : secondary ? 'secondary' : 'normal'

    return (
      <StyledButton
        className={className}
        type={type}
        onClick={onClick || onPress}
        styleLevel={styleLevel}
      >
        {content || title}
      </StyledButton>
    )
  }
}

export default ButtonFacade
