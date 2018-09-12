/*
 * Mocking values.
 */
const arrayMock = 'new Array()'
const boolMock = 'true'
const dateMock = 'new Date("2018-12-12 12:12")'
const funcMock = 'mock'
const nullMock = 'null'
const numberMock = '42'
const objMock = '{}'
const reactNodeMock = '<div/>'
const strMock = '"Atticomponents"'

const formatProp = (mock, withBrackets) => withBrackets ? `{${mock}}` : mock

export const mockArrayProp = prop => `{[${mockProp(prop, false)}]}`

/*
 * Returns the mock value in function of the prop.
 */
export const mockProp = (prop, withBrackets = true) => {
  switch (prop) {
    case 'PropTypes.instanceOf(Date)':
    case 'PropTypes.instanceOf(Date).isRequired':
      return formatProp(dateMock, withBrackets)
    case 'PropTypes.array':
    case 'PropTypes.array.isRequired':
      return formatProp(arrayMock, withBrackets)
    case 'PropTypes.string':
    case 'PropTypes.string.isRequired':
    case 'PropTypes.any':
    case 'PropTypes.any.isRequired':
      return formatProp(strMock, withBrackets)
    case 'PropTypes.bool':
    case 'PropTypes.bool.isRequired':
      return formatProp(boolMock, withBrackets)
    case 'PropTypes.number':
    case 'PropTypes.number.isRequired':
      return formatProp(numberMock, withBrackets)
    case 'PropTypes.func':
    case 'PropTypes.func.isRequired':
      return formatProp(funcMock, withBrackets)
    case 'PropTypes.object':
    case 'PropTypes.object.isRequired':
      return formatProp(objMock, withBrackets)
    case 'PropTypes.oneOf':
      return formatProp(nullMock, withBrackets)
    case 'PropTypes.node':
    case 'PropTypes.node.isRequired':
    case 'PropTypes.element':
    case 'PropTypes.element.isRequired':
      return formatProp(reactNodeMock, false)
    default:
      return formatProp(strMock, false)
  }
}
