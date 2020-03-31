import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import CheckBoxBox from './styles/CheckBoxBox'
import CheckBoxBoxContainer from './styles/CheckBoxBoxContainer'
import HiddenInputCheckBox from './styles/HiddenInputCheckBox'

/**
 * A checkbox button.
 *
 */
const CheckBox = ({ checked: propsChecked, id, name, onChange, value, ...rest }) => {
  const [checked, setChecked] = useState(propsChecked)

  const handleToggleChecked = () => {
    setChecked(!checked)
    onChange && onChange()
  }

  return (
    <CheckBoxBoxContainer {...rest}>
      <HiddenInputCheckBox
        id={id}
        checked={checked}
        name={name}
        onChange={handleToggleChecked}
        type="checkbox"
        value={value}
      />
      <CheckBoxBox />
    </CheckBoxBoxContainer>
  )
}

CheckBox.defaultProps = {
  checked: false,
  onChange: null,
}

CheckBox.propTypes = {
  /**
   * Whether or not the checkbox is checked.
   */
  checked: PropTypes.bool,
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
}

/** @component */
export default styled(CheckBox)``
