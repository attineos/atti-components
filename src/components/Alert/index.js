import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import StyledDiv from './styles/StyledDiv'

/**
 * An alert component.
 *
 */
const Alert = ({ children, className, variance }) => (
  <StyledDiv className={className} variance={variance}>
    {children}
  </StyledDiv>
)

Alert.defaultProps = {
  className: '',
  variance: 'success',
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
  variance: PropTypes.oneOf(['success', 'error', 'info', 'warning']),
}

/** @component */
export default styled(Alert)``
