import React from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'
import ButtonStyled from './styles/ButtonStyled'
/**
 * A Simple Button.
 *
 * @version 0.1
 * @author Alexandre
 */

const Button = ({ label, onClick }) => (
  <ButtonStyled type="button" onClick={onClick}>
    {label}
  </ButtonStyled>
)

Button.defaultProps = {
  onClick: noop,
}

Button.propTypes = {
  /**
   * Label of Button.
   */
  label: PropTypes.string.isRequired,

  /**
   * Method when user click on Buton.
   */
  onClick: PropTypes.func,
}

export default Button
