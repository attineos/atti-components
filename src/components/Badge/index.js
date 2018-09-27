import React from 'react'
import PropTypes from 'prop-types'

import StyledBadge from './styles/StyledBadge'

/**
 * Badge component.
 *
 * @version 0.1
 * @author Ludovic LE HENAFF
 */
class Badge extends React.Component {
  static defaultProps = {
    type: 'success',
    exponent: false,
  }

  static propTypes = {
    /**
     * Content of the Badge.
     */
    children: PropTypes.node.isRequired,

    /**
     * Set the badge with sup.
     */
    exponent: PropTypes.bool,

    /**
     * Type of Badge.
     */
    type: PropTypes.oneOf(['success', 'danger', 'info', 'warning']),
  }

  render() {
    const { children, type, exponent } = this.props

    const styledBadge = <StyledBadge type={type}>{children}</StyledBadge>
    return exponent ? <sup>{styledBadge}</sup> : styledBadge
  }
}

export default Badge
