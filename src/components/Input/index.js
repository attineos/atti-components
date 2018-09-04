import React from 'react'
import PropTypes from 'prop-types'

import InputStyle from './styles/InputStyle'

/**
 * An input field.
 *
 * @version 0.1
 * @author Joseph Lefevre
 */
const Input = ({ id, form, name, onChange, pattern, placeholder, size, type, value }) => (
  <InputStyle
    id={id}
    form={form}
    name={name}
    onChange={onChange}
    pattern={pattern}
    placeholder={placeholder}
    size={size}
    type={type}
    value={value}
  />
)

Input.defaultProps = {
  form: '',
  name: '',
  onChange: undefined,
  pattern: '',
  placeholder: '',
  size: null,
  value: undefined,
}

Input.propTypes = {
  /**
   * The id of the input field.
   */
  id: PropTypes.string.isRequired,
  /**
   * One or more forms the Input element belongs to.
   */
  form: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  /**
   * Name of the input element.
   */
  name: PropTypes.string,
  /**
   * Gets called when the user clicks on the link.
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   */
  onChange: PropTypes.func,
  /**
   * Specifies a regular expression that an Input elemen'ts value is checked against.
   */
  pattern: PropTypes.string,
  /**
   * A short hint that describes the expected value of an Input element.
   */
  placeholder: PropTypes.string,
  /**
   * The width, in characters, of an input element.
   */
  size: PropTypes.number,
  /**
   * The type of the input field.
   */
  type: PropTypes.string.isRequired,
  /**
   * The value of the input element
   */
  value: PropTypes.string,
}

export default Input
