import React from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'
import StyledButton from './styles/StyledButton'
/**
 * A Simple Button.
 *
 * @version 0.1
 * @author Alexandre
 */

const Button = ({ children, onClick }) => (
  <StyledButton type="button" onClick={onClick}>
    {children}
  </StyledButton>
)

Button.defaultProps = {
  onClick: noop(),
}

Button.propTypes = {
  /**
   * Content of the component. Only text for now.
   */
  children: PropTypes.string.isRequired,

  /**
   * This function is called when the user clicks on the Button.
   */
  onClick: PropTypes.func,
}

export default Button
