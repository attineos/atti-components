import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import StyledDiv from './styles/StyledDiv'

/**
 * An alert component.
 *
 */
class Alert extends PureComponent {
  render() {
    const { children, className, type } = this.props

    return (
      <StyledDiv className={className} type={type}>
        {children}
      </StyledDiv>
    )
  }
}

Alert.defaultProps = {
  className: '',
  type: 'success',
}

Alert.propTypes = {
  /**
   * Content of the Alert.
   */
  children: PropTypes.node.isRequired,
  /**
   * Classes of the Alert.
   */
  className: PropTypes.string,
  /**
   * Type of alert.
   */
  type: PropTypes.oneOf(['success', 'error', 'info', 'warning']),
}

/** @component */
export default styled(Alert)``
