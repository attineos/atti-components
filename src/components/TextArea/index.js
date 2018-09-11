import React from 'react'
import PropTypes from 'prop-types'

import StyledTextArea from './styles/StyledTextArea'
import StyledLabelTextArea from './styles/StyledLabelTextArea'

/**
 * A textarea with an associated label.
 *
 * @version 0.1
 * @author Joseph Lefevre
 */
const TextArea = ({ id, label, name, placeholder }) => (
  <>
    <StyledLabelTextArea htmlFor={id}>{label}</StyledLabelTextArea>
    <StyledTextArea id={id} placeholder={placeholder} name={name} />
  </>
)

TextArea.defaultProps = {
  id: '',
  label: '',
  placeholder: '',
}

TextArea.propTypes = {
  /**
   * The id of the textarea, which binds the textarea with the label.
   */
  id: PropTypes.string,
  /**
   * The text in the label of the textarea.
   */
  label: PropTypes.string,
  /**
   * The name of the textarea, which is used to get the value of the field.
   */
  name: PropTypes.string.isRequired,
  /**
   * The text by default in the textarea.
   */
  placeholder: PropTypes.string,
}

export default TextArea
