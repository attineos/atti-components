import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import StyledTextArea from './styles/StyledTextArea'

/**
 * A textarea.
 *
 */
const TextArea = ({ className, id, name, placeholder }) => (
  <StyledTextArea className={className} id={id} placeholder={placeholder} name={name} />
)

TextArea.defaultProps = {
  className: '',
  id: '',
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
   * The text by default in the Textarea.
   */
  placeholder: PropTypes.string,
}

/** @component */
export default styled(React.memo(TextArea))``
