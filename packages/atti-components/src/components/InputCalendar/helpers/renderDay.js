import React from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'
import { getDate, isToday, isSunday } from 'date-fns'

import StyledDay from '../styles/StyledDay'

const renderDay = ({ day, handleOnChange }) => (
  <StyledDay isToday={isToday(day)} isSunday={isSunday(day)} onClick={() => handleOnChange(day)}>
    {getDate(day)}
  </StyledDay>
)

renderDay.defaultProps = {
  day: null,
  handleOnChange: noop,
}

renderDay.propTypes = {
  day: PropTypes.object,
  handleOnChange: PropTypes.func,
}

export default renderDay
