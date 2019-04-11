/* eslint react/prop-types: 0 */
import React from 'react'
import Facade from './Facade'
import { StyledButtonGroup } from '../styles'

class ButtonGroupFacade extends Facade {
  render() {
    const { className, children } = this.props
    return <StyledButtonGroup className={className}>{children}</StyledButtonGroup>
  }
}

export default ButtonGroupFacade
