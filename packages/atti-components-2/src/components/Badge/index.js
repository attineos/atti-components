import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import StyledBadge from './styles/StyledBadge'

/**
 * Badge component.
 *
 */
const Badge = ({ as, children, className, variance, exponent }) => (
  <StyledBadge as={as || exponent ? 'sup' : undefined} className={className} variance={variance}>
    {children}
  </StyledBadge>
)

Badge.defaultProps = {
  as: '',
  className: '',
  exponent: false,
  variance: 'success',
}

Badge.propTypes = {
  /**
   * The rendered DOM element.
   */
  as: PropTypes.oneOf([PropTypes.Element, PropTypes.string]),
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
  variance: PropTypes.oneOf(['success', 'danger', 'info', 'warning']),
}

/** @component */
export default styled(Badge)``
