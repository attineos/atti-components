import { isFunction, isEmpty } from 'lodash'
import getMediaQuery from './getMediaQuery'

const wrapMediaQuery = (from, to, content) => {
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
