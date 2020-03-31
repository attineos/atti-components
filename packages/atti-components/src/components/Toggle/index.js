import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ToggleBox from './styles/ToggleBox'
import ToggleBoxContainer from './styles/ToggleBoxContainer'
import HiddenInputToggle from './styles/HiddenInputToggle'

/**
 * A toggle button.
 */
const Toggle = ({ checked: propsChecked, onChange, variant, click, sized }) => {
  const [checked, setChecked] = useState(propsChecked)

  const handleToggleChecked = () => {
    setChecked(!checked)
    onChange && onChange()
  }

  return (
    <ToggleBoxContainer variant={variant} click={click} sized={sized} checked={checked}>
      <HiddenInputToggle
        checked={checked}
        onChange={handleToggleChecked}
        type="checkbox"
        sized={sized}
      />
      <ToggleBox variant={variant} sized={sized} />
    </ToggleBoxContainer>
  )
}

Toggle.defaultProps = {
  checked: false,
  onChange: null,
  variant: 'primary',
  click: true,
  sized: 'large',
}

Toggle.propTypes = {
  /**
   * Whether or not the toggle is checked.
   */
  checked: PropTypes.bool,
  /**
   * Gets called when the value of the toggle changes.
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   */
  onChange: PropTypes.func,
  /**
   * The type of variation to display.
   */
  variant: PropTypes.oneOf(['primary', 'neutral', 'disabled', 'on_off']),

  /**
   * Click possible or not on the toggle.
   */
  click: PropTypes.bool,

  /**
   * The type of size to display.
   */
  sized: PropTypes.oneOf(['small', 'medium', 'large']),
}

/** @component */
export default styled(Toggle)``
