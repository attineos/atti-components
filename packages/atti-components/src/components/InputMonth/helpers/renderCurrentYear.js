import React from 'react'
import { map, range } from 'lodash'
import { getYear } from 'date-fns'
import Select from '../../Select'

const renderCurrentYear = (currentDate, yearRange, onChange) => (
  <Select
    id="currentYearSelector"
    options={map(range(yearRange[1], yearRange[0]), val => ({
      id: val,
      name: val,
    }))}
    onChange={e => onChange(e.target.value)}
    value={getYear(currentDate)}
  />
)

export default renderCurrentYear
