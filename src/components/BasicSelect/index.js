import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { map, isString } from 'lodash'

import StyledSelect from './styles/StyledSelect'

/**
 * A select field.
 *
 */
class BasicSelect extends PureComponent {
  render() {
    const {
      className,
      id,
      isMulti,
      name,
      onChange,
      options,
      size,
      value,
      defaultValue,
    } = this.props

    const optionsElements = map(options, elt => {
      const key = isString(elt) ? elt : elt.id || elt.name
      const value = elt
      const name = isString(elt) ? elt : elt.name || elt.id

      return (
        <option value={value} key={key}>
          {name}
        </option>
      )
    })

    return (
      <StyledSelect
        className={className}
        id={id}
        name={name}
        onChange={onChange}
        multiple={isMulti}
        size={size}
        value={value}
        defaultValue={defaultValue}
      >
        {optionsElements}
      </StyledSelect>
    )
  }
}

BasicSelect.defaultProps = {
  className: '',
  isMulti: false,
  name: '',
  onChange: null,
  size: 0,
  value: null,
  defaultValue: null,
}

BasicSelect.propTypes = {
  /**
   * The classes of the select.
   */
  className: PropTypes.string,
  /**
   * The id of the select.
   */
  id: PropTypes.string.isRequired,
  /**
   * A boolean which is true if we allow multiple selection.
   */
  isMulti: PropTypes.bool,
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
   * Number of elements displayed.
   */
  size: PropTypes.number,
  /**
   * The value to use as a controlled component
   */
  value: PropTypes.string,
  /**
   * The default value to use as an uncontrolled component
   */
  defaultValue: PropTypes.string,
}

/** @component */
export default styled(BasicSelect)``
