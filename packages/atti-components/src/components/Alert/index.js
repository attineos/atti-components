import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import StyledDiv from './styles/StyledDiv'

/**
 * An alert component.
 *
 */
const Alert = ({ children, variance, ...rest }) => (
  <StyledDiv variance={variance} {...rest}>
    {children}
  </StyledDiv>
)

Alert.defaultProps = {
  variance: 'success',
}

Alert.propTypes = {
  /**
   * Content of the Alert.
   */
  children: PropTypes.node.isRequired,
  /**
   * Type of alert.
   */
  variance: PropTypes.oneOf(['success', 'error', 'info', 'warning']),
}

/** @component */
export default styled(Alert)``
