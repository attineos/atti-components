import { map } from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import Sort from './types/sort'

import SelectContainer from './styles/SelectContainer'
import StyledSelect from './styles/StyledSelect'
import StyledLabel from './styles/StyledLabel'

/**
 * A select field.
 *
 * @version 0.1
 * @author Joseph Lefevre
 */
const Select = ({ id, isMulti, label, name, onChange, options, size, sort }) => {
  const optionsSorted =
    sort === Sort.ASC ? options.sort() : sort === Sort.DESC ? options.sort().reverse() : options
  const optionsElements = map(optionsSorted, elt => (
    <option value={elt} key={elt}>
      {elt}
    </option>
  ))
  return (
    <React.Fragment>
      {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
      <SelectContainer>
        <StyledSelect id={id} name={name} onChange={onChange} multiple={isMulti} size={size}>
          {optionsElements}
        </StyledSelect>
      </SelectContainer>
    </React.Fragment>
  )
}

Select.defaultProps = {
  isMulti: false,
  label: '',
  name: '',
  onChange: null,
  size: 0,
  sort: Sort.NONE,
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
   * A label associated to the select.
   */
  label: PropTypes.string,
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

export default Select
