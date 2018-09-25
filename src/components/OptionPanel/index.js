import React from 'react'
import PropTypes from 'prop-types'

import StyledOptionPanel from './styles/StyledOptionPanel'

/**
 * A container of Options.
 *
 * @version 0.1
 * @author Joseph Lefevre
 */
class OptionPanel extends React.Component {
  propTypes = {
    /**
     * Array of Option components.
     */
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
  }

  render() {
    const { children } = this.props
    return <StyledOptionPanel>{children}</StyledOptionPanel>
  }
}

export default OptionPanel
