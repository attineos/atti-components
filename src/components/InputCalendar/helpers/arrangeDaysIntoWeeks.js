import { forEach } from 'lodash'

const arrangeDaysIntoWeeks = days => {
  const weeks = {}

  forEach(days, (day, index) => {
    const weekIndex = Math.floor(index / 7)
    if (!weeks[weekIndex]) {
      weeks[weekIndex] = []
    }

    weeks[weekIndex].push(day)
  })

  return weeks
}

export default arrangeDaysIntoWeeks
