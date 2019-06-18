import { size } from 'lodash'
/*
 * Returns an array of strings containing every props.
 */
export const extractProps = content => content.match(/[\S]+: PropTypes.[\S][^.,(]+/g)

/*
 * Returns the prop's key.
 */
export const extractKey = prop => prop.match(/[\S]+:/g)

/*
 * Returns the prop's value.
 */
export const extractValue = prop => prop.match(/PropTypes.[\S]+/g)

/*
 * Returns children prop's value.
 */
export const extractChildrenValue = rawValue => rawValue.match(/[^{"}]+/g)

/*
 * Returns the number of components & styled-components in the file.
 */
export const getNumberOfComponents = content => {
  const classes = content.match(/extends (Component|PureComponent)/g)
  const styled = content.match(/=\s?styled/g)
  return size(classes) + size(styled)
}
