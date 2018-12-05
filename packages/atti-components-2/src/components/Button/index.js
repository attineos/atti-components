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
    const { children, className, onClick, onPress, title } = this.props

    return (
      <ButtonFacade
        className={className}
        content={children}
        onClick={onClick}
        onPress={onPress}
        title={title}
      />
    )
  }
}

Button.defaultProps = {
  className: '',
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
}

/** @component */
export default styled(Button)``
