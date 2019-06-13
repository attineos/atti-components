import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import StyledTextArea from './styles/StyledTextArea'

/**
 * A textarea.
 *
 */
class TextArea extends PureComponent {
  onChangeValue = e => {
    const { onChange } = this.props
    onChange && onChange(e.target.value)
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const { className, id, name, onChange, placeholder, ...rest } = this.props

    return (
      <StyledTextArea
        className={className}
        id={id}
        placeholder={placeholder}
        name={name}
        onChange={this.onChangeValue}
        {...rest}
      />
    )
  }
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
