import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import CheckBoxBox from './styles/CheckBoxBox'
import CheckBoxBoxContainer from './styles/CheckBoxBoxContainer'
import HiddenInputCheckBox from './styles/HiddenInputCheckBox'

/**
 * A checkbox button.
 *
 */
class CheckBox extends PureComponent {
  state = {
    checked: this.props.checked,
  }

  handleToggleChecked = () => {
    const { onChange } = this.props

    this.setState(
      prevState => ({
        checked: !prevState.checked,
      }),
      () => {
        onChange && onChange()
      },
    )
  }

  render() {
    const { className, id, name, value } = this.props
    return (
      <CheckBoxBoxContainer className={className}>
        <HiddenInputCheckBox
          id={id}
          checked={this.state.checked}
          name={name}
          onChange={this.handleToggleChecked}
          type="checkbox"
          value={value}
        />
        <CheckBoxBox />
      </CheckBoxBoxContainer>
    )
  }
}

CheckBox.defaultProps = {
  checked: false,
  className: '',
  onChange: null,
}

CheckBox.propTypes = {
  /**
   * Whether or not the checkbox is checked.
   */
  checked: PropTypes.bool,
  /**
   * Classes of the CheckBox.
   */
  className: PropTypes.string,
  /**
   * The id of the current element.
   */
  id: PropTypes.string.isRequired,
  /**
   * The name attribute is used to reference form data after a form is submitted.
   * Numerous checkbox with the same name value will be in the same group.
   */
  name: PropTypes.string.isRequired,
  /**
   * Gets called when the value of the checkbox changes.
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   */
  onChange: PropTypes.func,
  /**
   * The value attribute of the checkbox. This attribute has meaning when submitting a form.
   */
  value: PropTypes.string.isRequired,
}

/** @component */
export default styled(CheckBox)``
