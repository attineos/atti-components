import React from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'
import ButtonFacade from './facade'
/**
 * A Simple Button compatible for web and native.
 *
 * @version 0.2
 */

const Button = ({ children, onClick, onPress, title }) => (
  <ButtonFacade content={children} onClick={onClick} onPress={onPress} title={title} />
)

Button.defaultProps = {
  onClick: noop(),
  onPress: noop(),
}

Button.propTypes = {
  /**
   * Content of the component. Only text for now (web version).
   */
  children: PropTypes.string.isRequired,

  /**
   * This function is called when the user clicks on the Button (web version).
   */
  onClick: PropTypes.func,

  /**
   * This function is called when the user clicks on the Button (native version).
   */
  onPress: PropTypes.func,

  /**
   * Content of the component. Only text for now (native version).
   */
  title: PropTypes.string.isRequired,
}

export default Button
