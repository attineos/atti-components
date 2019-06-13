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
