// @noSnapshot
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import StyledInput from './styles/StyledInput'

/**
 * An input field.
 *
 */
const Input = ({
  id,
  form,
  name,
  onChange,
  forwardedRef,
  pattern,
  placeholder,
  size,
  type,
  value,
  variance,
  ...rest
}) => (
  <StyledInput
    form={form}
    id={id}
    name={name}
    onChange={onChange}
    pattern={pattern}
    placeholder={placeholder}
    size={size}
    type={type}
    value={value}
    ref={forwardedRef}
    variance={variance}
    {...rest}
  />
)

Input.defaultProps = {
  form: undefined,
  forwardedRef: undefined,
  id: undefined,
  name: '',
  onChange: undefined,
  pattern: undefined,
  placeholder: '',
  size: null,
  type: 'text',
  value: undefined,
  variance: 'normal',
}

Input.propTypes = {
  /**
   * The id of the input field.
   */
  id: PropTypes.string,
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
   * Ref of the input element.
   */
  forwardedRef: PropTypes.func,
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
  type: PropTypes.string,
  /**
   * The value of the input element.
   */
  value: PropTypes.any,
  /**
   * Which type of input to display.
   */
  variance: PropTypes.oneOf(['normal', 'error', 'warning']),
}

/** @component */
export default styled(React.forwardRef((props, ref) => <Input {...props} forwardedRef={ref} />))``
