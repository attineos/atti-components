// @noSnapshot
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Input from '../Input'

/**
 * An input field.
 *
 */
const InputMasked = ({ ...rest }) => {
  return <Input {...rest} />
}

InputMasked.defaultProps = {
  className: '',
  mask: '',
  onChange: undefined,
  onValidChange: undefined,
  value: undefined,
  variance: 'normal',
}

InputMasked.propTypes = {
  /**
   * The classes of the input field.
   */
  className: PropTypes.string,
  /**
   * The mask of the input element
   */
  mask: PropTypes.string,
  /**
   * Gets called when the user changes the value.
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   */
  onChange: PropTypes.func,
  /**
   * Gets called when the user changes the value and the new value completes the mask.
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   */
  onValidChange: PropTypes.func,
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
export default styled(React.memo(InputMasked))``
