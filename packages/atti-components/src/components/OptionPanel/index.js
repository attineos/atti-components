import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import StyledOptionPanel from './styles/StyledOptionPanel'

/**
 * A container of Options.
 *
 */
const OptionPanel = ({ children, className }) => (
  <StyledOptionPanel className={className}>{children}</StyledOptionPanel>
)

OptionPanel.defaultProps = {
  className: '',
}

OptionPanel.propTypes = {
  /**
   * Array of Option components.
   */
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  /**
   * Classes of OptionPanel.
   */
  className: PropTypes.string,
}

/** @component */
export default styled(OptionPanel)``
