import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { StyledHorizontalInputGroup, StyledVerticalInputGroup } from './styles'
/**
 * A Simple InputGroup compatible for web and native.
 *
 */
const InputGroup = ({ className, children, vertical }) => {
  const StyleComponent = vertical ? StyledVerticalInputGroup : StyledHorizontalInputGroup

  return <StyleComponent className={className}>{children}</StyleComponent>
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
   * The cols to use as header for the table.
   */
  children: PropTypes.any.isRequired,
  /**
   * Are the Inputs displayed vertically or not.
   */
  vertical: PropTypes.bool,
}

/** @component */
export default styled(InputGroup)``
