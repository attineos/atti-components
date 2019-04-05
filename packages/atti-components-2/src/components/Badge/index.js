import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import StyledBadge from './styles/StyledBadge'

/**
 * Badge component.
 *
 */
class Badge extends PureComponent {
  render() {
    const { children, className, variance, exponent } = this.props

    return (
      <StyledBadge as={exponent ? 'sup' : undefined} className={className} variance={variance}>
        {children}
      </StyledBadge>
    )
  }
}

Badge.defaultProps = {
  className: '',
  exponent: false,
  variance: 'success',
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
  variance: PropTypes.oneOf(['success', 'danger', 'info', 'warning']),
}

/** @component */
export default styled(Badge)``
