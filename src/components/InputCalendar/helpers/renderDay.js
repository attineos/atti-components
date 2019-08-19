import React from 'react'
import { getDate, isToday, isSunday } from 'date-fns'

import StyledDay from '../styles/StyledDay'

const renderDay = ({ day, handleOnChange }) => (
  <StyledDay isToday={isToday(day)} isSunday={isSunday(day)} onClick={() => handleOnChange(day)}>
    {getDate(day)}
  </StyledDay>
)

export default renderDay
