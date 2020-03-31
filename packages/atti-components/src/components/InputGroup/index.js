import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { StyledHorizontalInputGroup, StyledVerticalInputGroup } from './styles'
/**
 * A Simple InputGroup.
 *
 */
const InputGroup = ({ children, vertical, ...rest }) => {
  const StyleComponent = vertical ? StyledVerticalInputGroup : StyledHorizontalInputGroup

  return <StyleComponent {...rest}>{children}</StyleComponent>
}

InputGroup.defaultProps = {
  vertical: false,
}

InputGroup.propTypes = {
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
