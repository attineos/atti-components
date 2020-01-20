import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import StyledBadge from './styles/StyledBadge'

/**
 * Badge component.
 *
 */
const Badge = ({ children, variance, ...rest }) => (
  <StyledBadge variance={variance} {...rest}>
    {children}
  </StyledBadge>
)

Badge.defaultProps = {
  variance: 'success',
}

Badge.propTypes = {
  /**
   * Content of the Badge.
   */
  children: PropTypes.node.isRequired,
  /**
   * Type of Badge.
   */
  variance: PropTypes.oneOf(['success', 'danger', 'info', 'warning']),
}

/** @component */
export default styled(Badge)``
