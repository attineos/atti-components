import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import StyledOptionPanel from './styles/StyledOptionPanel'

/**
 * A container of Options.
 *
 */
class OptionPanel extends PureComponent {
  render() {
    const { children, className } = this.props

    return <StyledOptionPanel className={className}>{children}</StyledOptionPanel>
  }
}

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
