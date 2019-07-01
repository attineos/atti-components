import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import StyledTextArea from './styles/StyledTextArea'

/**
 * A textarea.
 *
 */
const TextArea = ({ className, id, name, onChange, placeholder, ...rest }) => {
  const onChangeValue = e => {
    onChange && onChange(e.target.value)
  }

  return (
    <StyledTextArea
      className={className}
      id={id}
      placeholder={placeholder}
      name={name}
      onChange={onChangeValue}
      {...rest}
    />
  )
}

TextArea.defaultProps = {
  className: '',
  id: '',
  onChange: null,
  placeholder: '',
}

TextArea.propTypes = {
  /**
   * The classes of the Textarea.
   */
  className: PropTypes.string,
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
}

/** @component */
export default styled(TextArea)``
