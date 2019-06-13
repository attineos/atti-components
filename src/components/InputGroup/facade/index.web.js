/* eslint react/prop-types: 0 */
import React from 'react'
import Facade from './Facade'
import { StyledHorizontalInputGroup, StyledVerticalInputGroup } from '../styles'

class InputGroupFacade extends Facade {
  render() {
    const { className, children, vertical } = this.props

    const StyleComponent = vertical ? StyledVerticalInputGroup : StyledHorizontalInputGroup

    return <StyleComponent className={className}>{children}</StyleComponent>
  }
}

export default InputGroupFacade
