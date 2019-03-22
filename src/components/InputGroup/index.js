import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import InputGroupFacade from './facade'
/**
 * A Simple Button compatible for web and native.
 *
 */
class InputGroup extends PureComponent {
  render() {
    const { className, children, vertical } = this.props

    return (
      <InputGroupFacade className={className} vertical={vertical}>
        {children}
      </InputGroupFacade>
    )
  }
}

InputGroup.defaultProps = {
  className: '',
  vertical: false,
}

InputGroup.propTypes = {
  /**
   * Classes of the Button.
   */
  className: PropTypes.string,
  /**
   * The cols to use as header for the table
   */
  children: PropTypes.any.isRequired,

  vertical: PropTypes.bool,
}

/** @component */
export default styled(InputGroup)``
