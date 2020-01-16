import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ToggleBox from './styles/ToggleBox'
import ToggleBoxContainer from './styles/ToggleBoxContainer'
import HiddenInputToggle from './styles/HiddenInputToggle'

/**
 * A checkbox button.
 */
const Toggle = ({
  checked: propsChecked,
  className,
  id,
  name,
  onChange,
  value,
  variant,
  position,
  display,
}) => {
  const [checked, setChecked] = useState(propsChecked)

  const handleToggleChecked = () => {
    setChecked(!checked)
    onChange && onChange()
  }

  return (
    <ToggleBoxContainer
      className={className}
      variant={variant}
      position={position}
      display={display}
    >
      <HiddenInputToggle
        id={id}
        checked={checked}
        name={name}
        onChange={handleToggleChecked}
        type="checkbox"
        value={value}
      />
      <ToggleBox variant={variant} position={position} />
    </ToggleBoxContainer>
  )
}

Toggle.defaultProps = {
  checked: false,
  className: '',
  onChange: null,
  variant: 'primary',
  position: 'default',
  display: true,
}

Toggle.propTypes = {
  /**
   * Whether or not the checkbox is checked.
   */
  checked: PropTypes.bool,
  /**
   * Classes of the CheckBox.
   */
  className: PropTypes.string,
  /**
   * The id of the current element.
   */
  id: PropTypes.string.isRequired,
  /**
   * The name attribute is used to reference form data after a form is submitted.
   * Numerous checkbox with the same name value will be in the same group.
   */
  name: PropTypes.string.isRequired,
  /**
   * Gets called when the value of the checkbox changes.
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   */
  onChange: PropTypes.func,
  /**
   * The value attribute of the checkbox. This attribute has meaning when submitting a form.
   */
  value: PropTypes.string.isRequired,

  /**
   * The type of variation to display
   */
  variant: PropTypes.oneOf(['primary', 'neutral', 'disabled', 'on_off']),

  /**
   * The type of position to display
   */
  position: PropTypes.oneOf(['default', 'reverse']),

  display: PropTypes.bool,
}

/** @component */
export default styled(Toggle)``
