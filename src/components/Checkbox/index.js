import React from 'react'
import PropTypes from 'prop-types'

import CheckboxBox from './styles/CheckboxBox'
import HiddenInputCheckbox from './styles/HiddenInputCheckbox'
import LabelCheckbox from './styles/LabelCheckbox'

/**
 * A checkbox button.
 *
 * @version 0.1
 */
class Checkbox extends React.Component {
  static defaultProps = {
    checked: false,
    onChange: null,
  }

  static propTypes = {
    /**
     * Whether or not the checkbox is checked.
     */
    checked: PropTypes.bool,
    /**
     * The id of the current element.
     */
    id: PropTypes.string.isRequired,
    /**
     * Content of the label of the checkbox.
     */
    label: PropTypes.string.isRequired,
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

  // TODO: improve by returning only the designed checkbox if there is no label
  render() {
    const { id, label, name, value } = this.props
    return (
      <LabelCheckbox htmlFor={id}>
        <HiddenInputCheckbox
          id={id}
          checked={this.state.checked}
          name={name}
          onChange={this.handleToggleChecked}
          type="checkbox"
          value={value}
        />
        <CheckboxBox />
        {label}
      </LabelCheckbox>
    )
  }
}

export default Checkbox
