import { get, join, camelCase } from 'lodash'

const getSpacesAsCss = (data, prefix = '') => {
  const spaces = [
    get(data, camelCase(`${prefix} top`), 0),
    get(data, camelCase(`${prefix} right`), 0),
    get(data, camelCase(`${prefix} bottom`), 0),
    get(data, camelCase(`${prefix} left`), 0),
  ]

  return join(spaces, ' ')
}
export default getSpacesAsCss
