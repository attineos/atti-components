import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import StyledDiv from './styles/StyledDiv'

/**
 * An alert component.
 *
 */
const Alert = ({ children, variant, ...rest }) => (
  <StyledDiv variant={variant} {...rest}>
    {children}
  </StyledDiv>
)

Alert.defaultProps = {
  variant: 'success',
}

Alert.propTypes = {
  /**
   * Content of the Alert.
   */
  children: PropTypes.node.isRequired,
  /**
   * Type of alert.
   */
  variant: PropTypes.oneOf(['success', 'error', 'info', 'warning']),
}

/** @component */
export default styled(Alert)``
