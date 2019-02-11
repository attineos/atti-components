import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { map, isString } from 'lodash'

import Sort from './types/sort'
import StyledSelect from './styles/StyledSelect'

/**
 * A select field.
 *
 */
class Select extends PureComponent {
  render() {
    const {
      className,
      id,
      isMulti,
      name,
      onChange,
      options,
      size,
      sort,
      value,
      defaultValue,
    } = this.props

    const optionsSorted =
      sort === Sort.ASC ? options.sort() : sort === Sort.DESC ? options.sort().reverse() : options
    const optionsElements = map(optionsSorted, elt => {
      const value = isString(elt) ? elt : elt.id || elt.name
      const key = isString(elt) ? elt : elt.id || elt.name
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

Select.defaultProps = {
  className: '',
  isMulti: false,
  name: '',
  onChange: null,
  size: 0,
  sort: Sort.NONE,
  value: null,
  defaultValue: null,
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
export default styled(Select)``
