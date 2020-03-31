import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import RadioButton from './styles/RadioButton'
import HiddenInputRadio from './styles/HiddenInputRadio'
import RadioContainer from './styles/RadioContainer'

/**
 * A radio button.
 *
 */
const Radio = ({ checked, id, name, onChange, value, ...rest }) => {
  const handleToggleChecked = event => {
    onChange && onChange(event)
  }

  return (
    <RadioContainer {...rest}>
      <HiddenInputRadio
        id={id}
        checked={checked === value}
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
  onChange: null,
}

Radio.propTypes = {
  /**
   * Should equals the value if you want it to be checked.
   */
  checked: PropTypes.string,
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
