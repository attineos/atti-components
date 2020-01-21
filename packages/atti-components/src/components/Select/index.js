import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { map, isString } from 'lodash'

import StyledSelect from './styles/StyledSelect'

/**
 * A select field.
 *
 */
const Select = ({ id, isMulti, name, onChange, options, size, value, defaultValue, ...rest }) => {
  const optionsElements = map(options, elt => {
    const value = isString(elt) ? elt : elt.id || elt.name
    const key = isString(elt) ? elt : elt.id || elt.name
    const name = isString(elt) ? elt : elt.name || elt.id

    return (
      <option value={value} key={key}>
        {name}
      </option>
    )
  })

  /*
   * React will consider the select as controlled even if value is null.
   */
  const finalValue = value === null ? undefined : value

  return (
    <StyledSelect
      id={id}
      name={name}
      onChange={onChange}
      multiple={isMulti}
      size={size}
      value={finalValue}
      defaultValue={defaultValue}
      {...rest}
    >
      {optionsElements}
    </StyledSelect>
  )
}

Select.defaultProps = {
  isMulti: false,
  name: '',
  onChange: null,
  size: 0,
  value: null,
  defaultValue: null,
}

Select.propTypes = {
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
   * The value to use as a controlled component.
   */
  value: PropTypes.any,
  /**
   * The default value to use as an uncontrolled component.
   */
  defaultValue: PropTypes.any,
}

/** @component */
export default styled(Select)``
