export default ({ borders, colors, spaces }) => ({
  borders: {
    borderColor: colors.darkWhite,
    borderRadius: '25px',
    borderWidth: borders.widths.bw2,
  },

  colors: {
    background: colors.transparent,
    fill: colors.lightPrimary,
    text: colors.darkerGrey,
  },

  sizes: {
    height: spaces.s1_5,
    width: spaces.full,
  },
})
