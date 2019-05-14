import { join } from 'lodash'

/**
 * Generate a media query string from two values for min and max width.
 * @param from The min width value.
 * @param to The max width value.
 * @returns {string} The rightly formatted query string to use in a media query.
 */
const getMediaQuery = (from = null, to = null) => {
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
