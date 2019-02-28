import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { map, isString, noop } from 'lodash'

import ReactSelect from 'react-select'

class AdvancedSelect extends PureComponent {
  componentWillMount() {
    if (this.props.defaultValue && this.props.value) {
      // eslint-disable-next-line no-console
      console.warn(
        "AdvancedSelect can't be both controlled and uncontrolled, please provide either defaultValue or value",
      )
    }

    this.isControlled = !!this.props.value

    if (this.isControlled) {
      // IsControlled by external code, just copy and pass
      this.setState({
        value: this.props.value,
        onChange: this.props.onChange,
      })
    } else {
      // not IsControlled by external code, just listen changes and handle internally
      this.setState({
        value: this.props.defaultValue,
        onChange: e => {
          this.setState(
            {
              value: e,
            },
            () => this.props.onChange(e.value),
          )
        },
      })
    }
  }

  componentWillReceiveProps(props) {
    if (this.isControlled !== !!props.value) {
      // eslint-disable-next-line no-console
      console.warn("AdvancedSelect can't switch between controlled and uncontrolled")
    }

    if (this.isControlled) {
      // IsControlled by external code, just copy and pass
      this.setState({
        value: props.value,
        onChange: props.onChange,
      })
    } else {
      // not IsControlled by external code, just listen changes and handle internally
      this.setState({
        value: props.defaultValue,
        onChange: e => {
          this.setState(
            {
              value: e,
            },
            () => props.onChange(e),
          )
        },
      })
    }
  }

  render() {
    const {
      className,
      isMulti,
      isSearchable,
      name,
      options,
      defaultValue,
      noOptionsMessage,
    } = this.props

    const { value, onChange } = this.state

    const safeOptions = map(options, option => {
      const value = option
      const name = isString(option) ? option : option.name || option.id

      return {
        label: name,
        value,
      }
    })

    return (
      <ReactSelect
        name={name}
        className={className}
        defaultValue={defaultValue}
        value={value}
        isMulti={isMulti}
        isSearchable={isSearchable}
        options={safeOptions}
        onChange={onChange}
        noOptionsMessage={noOptionsMessage}
      />
    )
  }
}

AdvancedSelect.defaultProps = {
  className: '',
  isMulti: false,
  isSearchable: false,
  name: '',
  onChange: noop,
  value: null,
  defaultValue: null,
  noOptionsMessage: '',
}

AdvancedSelect.propTypes = {
  /**
   * The classes of the select.
   */
  className: PropTypes.string,
  /**
   * A boolean which is true if we allow multiple selection.
   */
  isMulti: PropTypes.bool,
  /**
   * A boolean which is true if me allow input to search for select values
   */
  isSearchable: PropTypes.bool,
  /**
   * Name of the component.
   */
  name: PropTypes.string,
  /**
   * Function which is called when the value selected has changed.
   */
  onChange: PropTypes.func,
  /**
   * The options of the select.
   */
  options: PropTypes.array.isRequired,
  /**
   * The value to use as a controlled component
   */
  value: PropTypes.string,
  /**
   * The default value to use as an uncontrolled component
   */
  defaultValue: PropTypes.string,
  /**
   * The text to display when there is no options to display
   */
  noOptionsMessage: PropTypes.string,
}

/** @component */
export default styled(AdvancedSelect)``
