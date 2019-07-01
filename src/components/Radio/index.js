import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import RadioButton from './styles/RadioButton'
import HiddenInputRadio from './styles/HiddenInputRadio'
import RadioContainer from './styles/RadioContainer'

/**
 * A radio button.
 *
 */
const Radio = ({ checked: propsChecked, className, id, name, onChange, value }) => {
  const [checked, setChecked] = useState(propsChecked)

  const handleToggleChecked = () => {
    setChecked(!checked)
    onChange && onChange()
  }

  return (
    <RadioContainer className={className}>
      <HiddenInputRadio
        id={id}
        checked={checked}
        name={name}
        onChange={handleToggleChecked}
        type="radio"
        value={value}
      />
      <RadioButton />
    </RadioContainer>
  )
}

Radio.defaultProps = {
  checked: false,
  className: '',
  onChange: null,
}

Radio.propTypes = {
  /**
   * Whether or not the radio is checked.
   */
  checked: PropTypes.bool,
  /**
   * The classes of the Radio element.
   */
  className: PropTypes.string,
  /**
   * The id of the current element.
   */
  id: PropTypes.string.isRequired,
  /**
   * The name attribute is used to reference form data after a form is submitted.
   * Numerous radio with the same name value will be in the same group.
   */
  name: PropTypes.string.isRequired,
  /**
   * Gets called when the value of the radio changes.
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   */
  onChange: PropTypes.func,
  /**
   * The value attribute of the radio. This attribute has meaning when submitting a form.
   */
  value: PropTypes.string.isRequired,
}

/** @component */
export default styled(Radio)``
