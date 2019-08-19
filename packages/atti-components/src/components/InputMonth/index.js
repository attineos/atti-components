import React, { useState, useEffect } from 'react'
import { setMonth, setYear, isDate } from 'date-fns'
import { noop } from 'lodash'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import getMonthNames from './helpers/getMonthNames'
import renderContainer from './helpers/renderContainer'
import renderCurrentMonth from './helpers/renderCurrentMonth'
import renderCurrentYear from './helpers/renderCurrentYear'
import chainedRender from '../../helpers/generators/chainedRender'

const InputMonth = ({
  className,

  defaultValue,
  value,
  onChange,
  yearRange,

  containerRender,
  monthRender,
  yearRender,
}) => {
  const [stateValue, setStateValue] = useState(defaultValue)

  // Sync with value if in controlled state
  useEffect(() => {
    if (isDate(value)) {
      setStateValue(value)
    }
  }, [value])

  const handleOnChange = (value, mutator) => {
    const newDate = mutator(stateValue, value)
    setStateValue(newDate)
    onChange(newDate)
  }

  return chainedRender(
    renderContainer,
    containerRender,
    className,
    <React.Fragment>
      {chainedRender(renderCurrentMonth, monthRender, stateValue, getMonthNames(), val =>
        handleOnChange(val, setMonth),
      )}
      {chainedRender(renderCurrentYear, yearRender, stateValue, yearRange, val =>
        handleOnChange(val, setYear),
      )}
    </React.Fragment>,
  )
}

InputMonth.defaultProps = {
  className: '',

  defaultValue: new Date(),
  value: null,
  onChange: noop,
  yearRange: [1950, 2100],

  containerRender: null,
  monthRender: null,
  yearRender: null,
}

InputMonth.propTypes = {
  /**
   * The classes of the select.
   */
  className: PropTypes.string,

  defaultValue: PropTypes.instanceOf(Date),
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
  yearRange: PropTypes.arrayOf(PropTypes.number),

  containerRender: PropTypes.func,
  monthRender: PropTypes.func,
  yearRender: PropTypes.func,
}

/** @component */
export default styled(React.memo(InputMonth))``
