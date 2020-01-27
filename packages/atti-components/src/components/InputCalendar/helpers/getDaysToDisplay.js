import { eachDay, endOfMonth, endOfWeek, startOfMonth, startOfWeek, isDate } from 'date-fns'

const getDaysToDisplay = (date, weekStartsOn = 1) => {
  if (!isDate(date)) {
    throw new Error('Expecting a date object, got', typeof date)
  }

  // Rewind time back to the first weekday after the end of the month
  const firstDayToDisplay = startOfWeek(startOfMonth(date), { weekStartsOn })

  // Advance time to the last weekday after the end of the month
  const lastDayToDisplay = endOfWeek(endOfMonth(date), { weekStartsOn })

  return eachDay(firstDayToDisplay, lastDayToDisplay)
}

export default getDaysToDisplay
