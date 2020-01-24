import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ToggleBox from './styles/ToggleBox'
import ToggleBoxContainer from './styles/ToggleBoxContainer'
import HiddenInputToggle from './styles/HiddenInputToggle'

/**
 * A toggle button.
 */
const Toggle = ({
  checked: propsChecked,
  className,
  id,
  name,
  onChange,
  value,
  color,
  click,
  variant,
}) => {
  const [checked, setChecked] = useState(propsChecked)

  const handleToggleChecked = () => {
    setChecked(!checked)
    onChange && onChange()
  }

  return (
    <ToggleBoxContainer
      className={className}
      color={color}
      click={click}
      variant={variant}
      checked={checked}
    >
      <HiddenInputToggle
        id={id}
        checked={checked}
        name={name}
        onChange={handleToggleChecked}
        type="checkbox"
        value={value}
        variant={variant}
      />
      <ToggleBox color={color} variant={variant} />
    </ToggleBoxContainer>
  )
}

Toggle.defaultProps = {
  checked: false,
  className: '',
  onChange: null,
  color: 'primary',
  click: true,
  variant: 'large',
}

Toggle.propTypes = {
  /**
   * Whether or not the toggle is checked.
   */
  checked: PropTypes.bool,
  /**
   * Classes of the toggle.
   */
  className: PropTypes.string,
  /**
   * The id of the current element.
   */
  id: PropTypes.string.isRequired,
  /**
   * The name attribute is used to reference form data after a form is submitted.
   * Numerous toggle with the same name value will be in the same group.
   */
  name: PropTypes.string.isRequired,
  /**
   * Gets called when the value of the toggle changes.
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   */
  onChange: PropTypes.func,
  /**
   * The value attribute of the toggle. This attribute has meaning when submitting a form.
   */
  value: PropTypes.string.isRequired,

  /**
   * The type of variation to display.
   */
  color: PropTypes.oneOf(['primary', 'neutral', 'disabled', 'on_off']),

  /**
   * Click possible or not on the toggle.
   */
  click: PropTypes.bool,

  /**
   * The type of size to display.
   */
  variant: PropTypes.oneOf(['little', 'medium', 'large']),
}

/** @component */
export default styled(Toggle)``
