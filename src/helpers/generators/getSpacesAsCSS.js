import { get, join } from 'lodash'

const getSpacesAsCss = data => {
  const spaces = [
    get(data, 'top', 0),
    get(data, 'right', 0),
    get(data, 'bottom', 0),
    get(data, 'left', 0),
  ]

  return join(spaces, ' ')
}
export default getSpacesAsCss
