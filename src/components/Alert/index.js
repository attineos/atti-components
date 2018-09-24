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
  render() {
    const { children, type } = this.props
    return <StyledDiv type={type}>{children}</StyledDiv>
  }
}

Alert.defaultProps = {
  type: 'success',
}

Alert.propTypes = {
  /**
   * Content of the Alert
   */
  children: PropTypes.node.isRequired,

  /**
   * Type of alert
   */
  type: PropTypes.oneOf(['success', 'error', 'info', 'warning']),
}

export default Alert
