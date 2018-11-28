import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { map } from 'lodash'

import Sort from './types/sort'
import StyledSelect from './styles/StyledSelect'

/**
 * A select field.
 *
 */
const Select = ({ className, id, isMulti, name, onChange, options, size, sort }) => {
  const optionsSorted =
    sort === Sort.ASC ? options.sort() : sort === Sort.DESC ? options.sort().reverse() : options
  const optionsElements = map(optionsSorted, elt => (
    <option value={elt} key={elt}>
      {elt}
    </option>
  ))
  return (
    <StyledSelect
      className={className}
      id={id}
      name={name}
      onChange={onChange}
      multiple={isMulti}
      size={size}
    >
      {optionsElements}
    </StyledSelect>
  )
}

Select.defaultProps = {
  className: '',
  isMulti: false,
  name: '',
  onChange: null,
  size: 0,
  sort: Sort.NONE,
}

Select.propTypes = {
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
   * The sort to apply (ASC, DESC or NONE).
   */
  sort: PropTypes.oneOf([Sort.ASC, Sort.DESC, Sort.NONE]),
}

export default styled(Select)``
