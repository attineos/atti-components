// @noSnapshot
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { noop } from 'lodash'

import StyledButton from './styles/StyledButton'

/**
 * A Simple Button.
 *
 */
const Button = ({ children, className, onClick, type, variance }) => (
  <StyledButton className={className} type={type} onClick={onClick} variance={variance}>
    {children}
  </StyledButton>
)

Button.defaultProps = {
  children: '',
  className: '',
  onClick: noop(),
  type: 'button',
  variance: 'normal',
}

Button.propTypes = {
  /**
   * Content of the component. Only text for now.
   */
  children: PropTypes.string,

  /**
   * Classes of the Button.
   */
  className: PropTypes.string,

  /**
   * This function is called when the user clicks on the Button.
   */
  onClick: PropTypes.func,

  /**
   * The type to pass to the underlying button html element
   */
  type: PropTypes.string,

  /**
   * The type of variation to display
   */
  variance: PropTypes.oneOf(['primary', 'neutral', 'light', 'dark']),
}

/** @component */
export default styled(Button)``
