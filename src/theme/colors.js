import { lighten, darken } from 'polished'

/**
 * Base colors.
 */
const baseColors = {
  black: '#222222',
  blue: '#3498db',
  green: '#2ecc71',
  grey: '#bdc3c7',
  orange: '#f39c12',
  primary: '#f29400',
  secondary: '#0083f2',
  red: '#e74c3c',
  transparent: 'transparent',
  white: 'white',
}

const colors = {
  ...baseColors,

  lightBlue: lighten(0.3, baseColors.blue),
  darkBlue: darken(0.3, baseColors.blue),

  lightGreen: lighten(0.3, baseColors.green),
  darkGreen: darken(0.3, baseColors.green),

  lightGrey: lighten(0.3, baseColors.grey),
  darkGrey: darken(0.3, baseColors.grey),

  lightOrange: lighten(0.3, baseColors.orange),
  darkOrange: darken(0.3, baseColors.orange),

  lightRed: lighten(0.3, baseColors.red),
  darkRed: darken(0.3, baseColors.red),
}

export default colors
