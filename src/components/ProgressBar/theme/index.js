export default ({ borders, colors, spaces }) => ({
  borders: {
    borderColor: colors.smoke,
    borderRadius: '25px',
    borderWidth: borders.widths.bw2,
  },

  colors: {
    background: colors.transparent,
    fill: colors.primary,
    text: colors.grey,
  },

  sizes: {
    height: spaces.s12,
    width: spaces.full,
  },
})
