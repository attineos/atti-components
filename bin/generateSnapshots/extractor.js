export const extractProps = content => content.match(/[\S]+: PropTypes.[\S][^.,(]+/g)

export const extractKey = prop => prop.match(/[\S]+:/g)

export const extractValue = prop => prop.match(/PropTypes.[\S]+/g)
