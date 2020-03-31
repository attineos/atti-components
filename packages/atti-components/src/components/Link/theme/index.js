import { lightenDarken } from 'helpers'

export default ({ borders, colors }) => ({
  borders: {
    width: borders.widths.bw1,
  },
  colors: {
    border: 'transparent',
    borderHover: 'currentcolor',
    text: colors.primary,
    textHover: lightenDarken(colors.primary, 10),
    textVisited: lightenDarken(colors.primary, -20),
  },
})
