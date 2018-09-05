import React from 'react'
import PropTypes from 'prop-types'

import ContainerCheckbox from './styles/ContainerCheckbox'
import FakeCheckbox from './styles/FakeCheckbox'
import HiddenInputCheckbox from './styles/HiddenInputCheckbox'
import LabelCheckbox from './styles/LabelCheckbox'

/**
 * A checkbox button.
 *
 * @version 0.1
 * @author Joseph Lefevre
 */
class Checkbox extends React.Component {
  state = {
    checked: this.props.checked,
  }

  changeState = () => {
    this.setState(prevState => ({
      checked: !prevState.checked,
    }))
  }

  defaultProps = {
    checked: false,
    label: '',
    onChange: null,
    style: {},
  }

  propTypes = {
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
    label: PropTypes.string,
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
     * Style inline which is given to modify the container
     */
    style: PropTypes.object,
    /**
     * The value attribute of the checkbox. This attribute has meaning when submitting a form.
     */
    value: PropTypes.string.isRequired,
  }

  render() {
    const { id, label, name, onChange, style, value } = this.props
    return (
      <ContainerCheckbox style={style} onClick={this.changeState}>
        <HiddenInputCheckbox
          id={id}
          checked={this.state.checked}
          name={name}
          onChange={onChange}
          type="checkbox"
          value={value}
        />
        <FakeCheckbox />
        {label && <LabelCheckbox htmlFor={id}>{label}</LabelCheckbox>}
      </ContainerCheckbox>
    )
  }
}

export default Checkbox
