import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { StyledButtonGroup } from './styles'

/**
 * A Simple Button.
 *
 */
const ButtonGroup = ({ children, ...rest }) => (
  <StyledButtonGroup {...rest}>{children}</StyledButtonGroup>
)

ButtonGroup.propTypes = {
  /**
   * The Buttons that will be grouped.
   */
  children: PropTypes.any.isRequired,
}

/** @component */
export default styled(ButtonGroup)``
