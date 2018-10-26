import { join } from 'lodash'

const getMediaQuery = (from, to) => {
  const buff = []

  if (from) {
    buff.push(`(min-width: ${from})`)
  }
  if (to) {
    buff.push(`(max-width: ${to})`)
  }

  return join(buff, ' and ')
}
export default getMediaQuery
