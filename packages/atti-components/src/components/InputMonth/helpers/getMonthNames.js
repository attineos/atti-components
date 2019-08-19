/* eslint-env browser, node */
import { memoize, get } from 'lodash'
import { format } from 'date-fns'

const getMonthNames = () => {
  const monthNames = []

  for (let i = 0; i < 12; i++) {
    monthNames.push({
      id: i,
      name: format(new Date(2019, i, 1), 'MMM'),
    })
  }

  return monthNames
}

// Memoize result, avoid recreating a new array each time, avoid causing useless react rerender,
// Can you feel such performance !
export default memoize(
  getMonthNames,
  () => `attiCompoGetMonthNames-${get(window, '__localeId__', 'default')}`,
)
