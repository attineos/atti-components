import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import StyledInput from './styles/StyledInput'

/**
 * An input field.
 *
 */
class Input extends PureComponent {
  render() {
    const {
      className,
      id,
      form,
      name,
      onChange,
      _ref,
      pattern,
      placeholder,
      size,
      type,
      value,
      variance,
      ...rest
    } = this.props

    return (
      <StyledInput
        className={className}
        form={form}
        id={id}
        name={name}
        onChange={onChange}
        pattern={pattern}
        placeholder={placeholder}
        size={size}
        type={type}
        value={value}
        ref={_ref}
        variance={variance}
        {...rest}
      />
    )
  }
}

Input.defaultProps = {
  className: '',
  form: undefined,
  name: '',
  onChange: undefined,
  _ref: undefined,
  pattern: undefined,
  placeholder: '',
  size: null,
  value: undefined,
  variance: 'normal',
}

Input.propTypes = {
  /**
   * The classes of the input field.
   */
  className: PropTypes.string,
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
   * Ref of the input element.
   */
  _ref: PropTypes.func,
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
  /**
   * Which type of input to display
   */
  variance: PropTypes.oneOf(['normal', 'error', 'warning']),
}

/** @component */
export default styled(Input)``
