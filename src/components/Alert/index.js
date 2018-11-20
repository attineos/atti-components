import React from 'react'
import PropTypes from 'prop-types'

import StyledDiv from './styles/StyledDiv'

/**
 * An alert component.
 *
 */
class Alert extends React.PureComponent {
  render() {
    const { children, className, type } = this.props
    return <StyledDiv className={className} type={type}>{children}</StyledDiv>
  }
}

Alert.defaultProps = {
  className: '',
  type: 'success',
}

Alert.propTypes = {
  /**
   * Content of the Alert
   */
  children: PropTypes.node.isRequired,
  /**
   * Classes of the Alert
   */
  className: PropTypes.node,
  /**
   * Type of alert
   */
  type: PropTypes.oneOf(['success', 'error', 'info', 'warning']),
}

export default Alert
