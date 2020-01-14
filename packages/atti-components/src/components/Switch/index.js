// @noSnapshot
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Ellipse from './styles/StyledEllipse'
import Rectangle from './styles/StyledRectangle'

/**
 * A Simple Switch.
 */
const Switch = ({ children, className, disabled, onClick, switches, variance }) => {
  return (
    <Rectangle className={className} disabled={disabled} variance={variance}>
      <Ellipse
        className={className}
        disabled={disabled}
        switches={switches}
        onClick={onClick}
        variance={variance}
      >
        {children}
      </Ellipse>
    </Rectangle>
  )
}

Switch.defaultProps = {
  children: '',
  className: '',
  disabled: false,
  onClick: null,
  switches: false,
  variance: 'primary',
}

Switch.propTypes = {
  /**
   * Content of the component. Only text for now.
   */
  children: PropTypes.string,

  /**
   * Classes of the Button.
   */
  className: PropTypes.string,

  /**
   * Is the Button disabled or not.
   */
  disabled: PropTypes.bool,

  /**
   * This function is called when the user clicks on the Button.
   */
  onClick: PropTypes.func,

  /**
   * The type to pass to the underlying button html element
   */
  switches: PropTypes.bool,

  /**
   * The type of variation to display
   */
  variance: PropTypes.oneOf(['primary', 'dark']),
}

/** @component */
export default styled(React.memo(Switch))``
