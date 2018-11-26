import React from 'react'
import PropTypes from 'prop-types'

import StyledOptionPanel from './styles/StyledOptionPanel'

/**
 * A container of Options.
 *
 */
const OptionPanel = ({ children }) => <StyledOptionPanel>{children}</StyledOptionPanel>

OptionPanel.propTypes = {
  /**
   * Array of Option components.
   */
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
}

export default OptionPanel
