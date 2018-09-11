/*
 * Mocking values.
 */
const arrayMock = '{new Array()}'
const boolMock = '{true}'
const childrenMock = '<div/>'
const dateMock = '{new Date("2018-12-12 12:12")}'
const funcMock = '{mock}'
const nullMock = '{null}'
const numberMock = '{42}'
const objMock = '{{}}'
const reactNodeMock = '{<div/>}'
const strMock = '"Atticomponents"'

/*
 * Returns the mock value in function of the prop.
 */
export const mockProp = prop => {
  switch (prop) {
    case 'children':
      return childrenMock
    case 'PropTypes.instanceOf(Date)':
      return dateMock
    case 'PropTypes.array':
      return arrayMock
    case 'PropTypes.string':
    case 'PropTypes.any':
      return strMock
    case 'PropTypes.bool':
      return boolMock
    case 'PropTypes.number':
      return numberMock
    case 'PropTypes.func':
      return funcMock
    case 'PropTypes.object':
      return objMock
    case 'PropTypes.oneOf':
      return nullMock
    case 'PropTypes.node':
    case 'PropTypes.element':
      return reactNodeMock
    default:
      return boolMock
  }
}
