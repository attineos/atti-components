import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import StyledBadge from './styles/StyledBadge'

/**
 * Badge component.
 *
 */
const Badge = ({ children, variant, ...rest }) => (
  <StyledBadge variant={variant} {...rest}>
    {children}
  </StyledBadge>
)

Badge.defaultProps = {
  variant: 'success',
}

Badge.propTypes = {
  /**
   * Content of the Badge.
   */
  children: PropTypes.node.isRequired,
  /**
   * Type of Badge.
   */
  variant: PropTypes.oneOf(['success', 'danger', 'info', 'warning']),
}

/** @component */
export default styled(Badge)``
