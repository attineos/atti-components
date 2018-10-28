import { isFunction, isEmpty, noop } from 'lodash'
import getMediaQuery from './getMediaQuery'

/**
 * Wrap the content inside a media query.
 * The content can be either a valid css string, or a function that return a valid css string.
 *
 * @param from The min width value.
 * @param to The max width value.
 * @param content the content string of function to use as media queried css.
 * @returns {string} The css string with the query and code.
 */
const wrapMediaQuery = (from = null, to = null, content = noop) => {
  const contentString = isFunction(content) ? content() : content
  const mediaQuery = getMediaQuery(from, to)

  return !isEmpty(mediaQuery)
    ? `
  @media ${mediaQuery} {
    ${contentString}
  }`
    : `${contentString}`
}

export default wrapMediaQuery
