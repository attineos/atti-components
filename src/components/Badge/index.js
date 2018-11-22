import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import StyledBadge from './styles/StyledBadge'

/**
 * Badge component.
 *
 */
const Badge = ({ children, className, type, exponent }) => (
  <StyledBadge as={exponent ? 'sup' : undefined} className={className} type={type}>
    {children}
  </StyledBadge>
)

Badge.defaultProps = {
  className: '',
  exponent: false,
  type: 'success',
}

Badge.propTypes = {
  /**
   * Content of the Badge.
   */
  children: PropTypes.node.isRequired,
  /**
   * Classes of the Badge.
   */
  className: PropTypes.string,
  /**
   * Set the badge with sup.
   */
  exponent: PropTypes.bool,

  /**
   * Type of Badge.
   */
  type: PropTypes.oneOf(['success', 'danger', 'info', 'warning']),
}

export default styled(Badge)``
