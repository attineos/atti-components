import React, { useState, useEffect } from 'react'
import { setMonth, setYear, isDate, addMonths } from 'date-fns'
import { noop } from 'lodash'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import getMonthNames from './helpers/getMonthNames'
import renderContainer from './helpers/renderContainer'
import renderCurrentMonth from './helpers/renderCurrentMonth'
import renderCurrentYear from './helpers/renderCurrentYear'
import chainedRender from '../../helpers/generators/chainedRender'
import renderControlButton from './helpers/renderControlButton'

const InputMonth = ({
  className,

  defaultValue,
  value,
  onChange,
  yearRange,
  withNextPrevButtons = false,
  locale,

  containerRender,
  controlButtonRender,
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

  const handleMutatorOnChange = (value, mutator) => {
    const newDate = mutator(stateValue, value)
    setStateValue(newDate)
    onChange(newDate)
  }
  const handleOnChange = value => {
    setStateValue(value)
    onChange(value)
  }

  return chainedRender(
    renderContainer,
    containerRender,
    className,
    <React.Fragment>
      {withNextPrevButtons &&
        chainedRender(renderControlButton, controlButtonRender, stateValue, 'prev', () =>
          handleOnChange(addMonths(stateValue, -1)),
        )}
      {chainedRender(renderCurrentMonth, monthRender, stateValue, getMonthNames(locale), val =>
        handleMutatorOnChange(val, setMonth),
      )}
      {chainedRender(renderCurrentYear, yearRender, stateValue, yearRange, val =>
        handleMutatorOnChange(val, setYear),
      )}
      {withNextPrevButtons &&
        chainedRender(renderControlButton, controlButtonRender, stateValue, 'next', () =>
          handleOnChange(addMonths(stateValue, 1)),
        )}
    </React.Fragment>,
  )
}

InputMonth.defaultProps = {
  className: '',

  defaultValue: new Date(),
  value: null,
  onChange: noop,
  yearRange: [2000, 2040],

  containerRender: null,
  monthRender: null,
  yearRender: null,

  locale: null,
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

  locale: PropTypes.any,
}

/** @component */
export default styled(React.memo(InputMonth))``
