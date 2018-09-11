import React from 'react'
import PropTypes from 'prop-types'

import RadioButton from './styles/RadioButton'
import HiddenInputRadio from './styles/HiddenInputRadio'
import LabelRadio from './styles/LabelRadio'

/**
 * A radio button.
 *
 * @version 0.1
 * @author Joseph Lefevre
 */
class Radio extends React.Component {
  static defaultProps = {
    checked: false,
    onChange: null,
  }

  static propTypes = {
    /**
     * Whether or not the radio is checked.
     */
    checked: PropTypes.bool,
    /**
     * The id of the current element.
     */
    id: PropTypes.string.isRequired,
    /**
     * Content of the label of the radio.
     */
    label: PropTypes.string.isRequired,
    /**
     * The name attribute is used to reference form data after a form is submitted.
     * Numerous radio with the same name value will be in the same group.
     */
    name: PropTypes.string.isRequired,
    /**
     * Gets called when the value of the radio changes.
     *
     * @param {SyntheticEvent} event The react `SyntheticEvent`
     */
    onChange: PropTypes.func,
    /**
     * The value attribute of the radio. This attribute has meaning when submitting a form.
     */
    value: PropTypes.string.isRequired,
  }

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
    const { id, label, name, value } = this.props
    return (
      <LabelRadio htmlFor={id}>
        <HiddenInputRadio
          id={id}
          checked={this.state.checked}
          name={name}
          onChange={this.handleToggleChecked}
          type="radio"
          value={value}
        />
        <RadioButton />
        {label}
      </LabelRadio>
    )
  }
}

export default Radio
