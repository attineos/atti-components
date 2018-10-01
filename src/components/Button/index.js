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
   * ![Native](src/images/native.png "")
   * ![Web](src/images/web.png "")
   * Content of the component. Only text for now.
   */
  children: PropTypes.string.isRequired,

  /**
   * ![Native](src/images/native.png "")
   * ![Web](src/images/web.png "")
   * This function is called when the user clicks on the Button.
   */
  onClick: PropTypes.func,

  /**
   * ![Native](src/images/native.png "")
   * ![Web](src/images/web.png "")
   * This function is called when the user clicks on the Button.
   */
  onPress: PropTypes.func,

  /**
   * ![Native](src/images/native.png "")
   * ![Web](src/images/web.png "")
   * Content of the component. Only text for now.
   */
  title: PropTypes.string.isRequired,
}

export default Button
