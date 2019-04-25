// @noSnapshot
import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { noop } from 'lodash'

import ButtonFacade from './facade'
/**
 * A Simple Button compatible for web and native.
 *
 */
class Button extends PureComponent {
  render() {
    const { children, className, onClick, onPress, title, type, variance } = this.props

    return (
      <ButtonFacade
        className={className}
        content={children}
        onClick={onClick}
        onPress={onPress}
        title={title}
        type={type}
        variance={variance}
      />
    )
  }
}

Button.defaultProps = {
  className: '',
  onClick: noop(),
  onPress: noop(),
  type: 'button',
  variance: 'primary',
}

Button.propTypes = {
  /**
   * ![Native](src/images/native.png "")
   * ![Web](src/images/web.png "")
   * Content of the component. Only text for now.
   */
  children: PropTypes.string.isRequired,

  /**
   * Classes of the Button.
   */
  className: PropTypes.string,

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
  /**
   * The type to pass to the underlying button html element
   * ![Web](src/images/web.png "")
   */
  type: PropTypes.string,

  /**
   * The type of variation to display
   * ![Native](src/images/native.png "")
   * ![Web](src/images/web.png "")
   */
  variance: PropTypes.oneOf(['primary', 'secondary', 'normal']),
}

/** @component */
export default styled(Button)``
