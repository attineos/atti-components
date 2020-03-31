import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import StyledTextArea from './styles/StyledTextArea'

/**
 * A textarea.
 *
 */
const TextArea = ({ id, name, onChange, placeholder, value, ...rest }) => {
  const onChangeValue = e => {
    onChange && onChange(e.target.value)
  }

  /*
   * React will consider the textarea as controlled even if value is null.
   */
  const finalValue = value === null ? undefined : value

  return (
    <StyledTextArea
      id={id}
      placeholder={placeholder}
      name={name}
      onChange={onChangeValue}
      value={finalValue}
      {...rest}
    />
  )
}

TextArea.defaultProps = {
  id: '',
  onChange: null,
  placeholder: '',
  value: undefined,
}

TextArea.propTypes = {
  /**
   * The id of the Textarea, which binds the Textarea with the label.
   */
  id: PropTypes.string,
  /**
   * The name of the Textarea, which is used to get the value of the field.
   */
  name: PropTypes.string.isRequired,
  /**
   * The function called on value change.
   */
  onChange: PropTypes.func,
  /**
   * The text by default in the Textarea.
   */
  placeholder: PropTypes.string,
  /**
   * The value of the Textarea.
   */
  value: PropTypes.string,
}

/** @component */
export default styled(TextArea)``
