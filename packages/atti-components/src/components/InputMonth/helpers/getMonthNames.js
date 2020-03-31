/* eslint-env browser, node */
import { startCase } from 'lodash'
import { format } from 'date-fns'

const getMonthNames = (locale = undefined) => {
  const monthNames = []

  for (let i = 0; i < 12; i++) {
    monthNames.push({
      id: i,
      name: startCase(format(new Date(2019, i, 1), 'MMMM', { locale: locale })),
    })
  }

  return monthNames
}

// Memoize result, avoid recreating a new array each time, avoid causing useless react rerender,
// Can you feel such performance !
export default getMonthNames
