import React from 'react'
import PropTypes from 'prop-types'

import StyledDiv from './styles/StyledDiv'

/**
 * An alert component.
 *
 * @version 0.1
 * @author Ludovic LE HENAFF
 */
class Alert extends React.PureComponent {
  static defaultProps = {
    type: 'success',
  }

  static propTypes = {
    /**
     * Content of the Alert
     */
    children: PropTypes.node.isRequired,

    /**
     * Type of alert
     */
    type: PropTypes.oneOf(['success', 'error', 'info', 'warning']),
  }

  render() {
    const { children, type } = this.props
    return <StyledDiv type={type}>{children}</StyledDiv>
  }
}

export default Alert
