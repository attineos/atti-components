import React from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'
import { getDate, isToday, isSunday, isSameDay, isSameMonth } from 'date-fns'

import StyledDay from '../styles/StyledDay'

const renderDay = ({ value, cursorValue, day, handleOnChange }) => (
  <StyledDay
    isToday={isToday(day)}
    isSunday={isSunday(day)}
    onClick={() => handleOnChange(day)}
    isSelected={isSameDay(value, day)}
    isSameMonth={isSameMonth(cursorValue, day)}
  >
    {getDate(day)}
  </StyledDay>
)

renderDay.defaultProps = {
  day: null,
  value: null,
  cursorValue: null,
  handleOnChange: noop,
}

renderDay.propTypes = {
  day: PropTypes.object,
  value: PropTypes.object,
  cursorValue: PropTypes.object,
  handleOnChange: PropTypes.func,
}

export default renderDay
