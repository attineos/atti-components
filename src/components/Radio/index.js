import React from 'react'
import PropTypes from 'prop-types'

import ContainerRadio from './styles/ContainerRadio'
import FakeRadio from './styles/FakeRadio'
import HiddenInputRadio from './styles/HiddenInputRadio'
import LabelRadio from './styles/LabelRadio'

/**
 * A radio button.
 *
 * @version 0.1
 * @author Joseph Lefevre
 */
class Radio extends React.Component {
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
    label: PropTypes.string,
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
     * Style inline which is given to modify the container
     */
    style: PropTypes.object,
    /**
     * The value attribute of the radio. This attribute has meaning when submitting a form.
     */
    value: PropTypes.string.isRequired,
  }

  render() {
    const { id, label, name, onChange, style, value } = this.props
    return (
      <ContainerRadio style={style} onClick={this.changeState}>
        <HiddenInputRadio
          id={id}
          checked={this.state.checked}
          name={name}
          onChange={onChange}
          type="radio"
          value={value}
        />
        <FakeRadio />
        {label && <LabelRadio htmlFor={id}>{label}</LabelRadio>}
      </ContainerRadio>
    )
  }
}

export default Radio
