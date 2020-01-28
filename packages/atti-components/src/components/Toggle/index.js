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
  variant,
  click,
  sized,
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
      click={click}
      sized={sized}
      checked={checked}
    >
      <HiddenInputToggle
        id={id}
        checked={checked}
        name={name}
        onChange={handleToggleChecked}
        type="checkbox"
        value={value}
        sized={sized}
      />
      <ToggleBox variant={variant} sized={sized} />
    </ToggleBoxContainer>
  )
}

Toggle.defaultProps = {
  checked: false,
  className: '',
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
