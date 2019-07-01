import { get } from 'lodash'

/**
 * Take a Css size (px, em, etc) and apply operation on it, then return the result as a CSS size
 * @param input
 * @param operation
 */
const calcCssSize = (input, operation) => {
  const values = input.match(/([^0-9]*)([^a-zA-Z]*)/g)
  const value = get(values, '0')
  const unit = get(values, '1')

  const newValue = operation(value, unit)

  return `${newValue}${unit}`
}

export default calcCssSize
