import React from 'react'
import { getMonth } from 'date-fns'
import Select from '../../Select'

const renderCurrentMonth = (currentDate, monthNames, onChange) => (
  <Select
    id="currentMonthSelector"
    options={monthNames}
    onChange={e => onChange(e.target.value)}
    value={getMonth(currentDate)}
  />
)

export default renderCurrentMonth
