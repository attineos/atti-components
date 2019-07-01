import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { StyledButtonGroup } from './styles'
/**
 * A Simple Button.
 *
 */
const ButtonGroup = ({ className, children }) => (
  <StyledButtonGroup className={className}>{children}</StyledButtonGroup>
)

ButtonGroup.defaultProps = {
  className: '',
}

ButtonGroup.propTypes = {
  /**
   * Classes of the ButtonGroup.
   */
  className: PropTypes.string,
  /**
   * The Buttons that will be grouped.
   */
  children: PropTypes.any.isRequired,
}

/** @component */
export default styled(ButtonGroup)``
