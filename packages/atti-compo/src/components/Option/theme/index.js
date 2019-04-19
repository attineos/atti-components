export default ({ borders, colors, spaces }) => ({
  borders: {
    color: colors.darkSmoke,
    style: 'solid',
    width: borders.widths.bw1,
  },
  colors: {
    background: colors.white,
    backgroundSelected: colors.primary,
    text: colors.black,
    textSelected: colors.white,
  },
  spaces: {
    padding: spaces.s0_5,
  },
})
