/*
 * Mocking values.
 */
const arrayMock = '{new Array()}'
const boolMock = '{true}'
const childrenMock = '<div/>'
const dateMock = '{new Date("2018-12-12 12:12")}'
const funcMock = '{mock}'
const numberMock = '{42}'
const objMock = '{{}}'
const strMock = '"hello world"'
const reactNodeMock = '{<div/>}'

export const mockProp = prop => {
  switch (prop) {
    case 'children':
      return childrenMock
    case 'PropTypes.instanceOf(Date)':
      return dateMock
    case 'PropTypes.string':
    case 'PropTypes.string.isRequired':
    case 'PropTypes.any':
    case 'PropTypes.any.isRequired':
      return strMock
    case 'PropTypes.bool':
    case 'PropTypes.bool.isRequired':
      return boolMock
    case 'PropTypes.number':
    case 'PropTypes.number.isRequired':
      return numberMock
    case 'PropTypes.func':
    case 'PropTypes.func.isRequired':
      return funcMock
    case 'PropTypes.object':
    case 'PropTypes.object.isRequired':
      return objMock
    case 'PropTypes.node':
    case 'PropTypes.node.isRequired':
      return reactNodeMock
    default:
      return boolMock
  }
}
