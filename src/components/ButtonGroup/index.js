import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import ButtonGroupFacade from './facade'
/**
 * A Simple Button compatible for web and native.
 *
 */
class ButtonGroup extends PureComponent {
  render() {
    const { className, children } = this.props

    return <ButtonGroupFacade className={className}>{children}</ButtonGroupFacade>
  }
}

ButtonGroup.defaultProps = {
  className: '',
}

ButtonGroup.propTypes = {
  /**
   * Classes of the Button.
   */
  className: PropTypes.string,
  /**
   * The cols to use as header for the table
   */
  children: PropTypes.any.isRequired,
}

/** @component */
export default styled(ButtonGroup)``
