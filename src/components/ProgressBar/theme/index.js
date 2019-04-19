export default ({ borders, colors, spaces }) => ({
  borders: {
    borderColor: colors.darkWhite,
    borderRadius: '25px',
    borderWidth: borders.widths.bw2,
  },

  colors: {
    background: colors.transparent,
    fill: colors.primary,
    text: colors.grey,
  },

  sizes: {
    height: spaces.s1,
    width: spaces.full,
  },
})
