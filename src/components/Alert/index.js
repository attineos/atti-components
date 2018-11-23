import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import StyledDiv from './styles/StyledDiv'

/**
 * An alert component.
 *
 */
const Alert = ({ children, className, type }) => (
  <StyledDiv className={className} type={type}>
    {children}
  </StyledDiv>
)

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
  type: PropTypes.oneOf(['success', 'danger', 'info', 'warning']),
}

/** @component */
export default styled(React.memo(Alert))``
