export default ({ borders, colors, spaces }) => ({
  borders: {
    borderWidth: borders.widths.bw2,
    borderRadius: borders.radius.medium,
  },
  colors: {
    background: colors.white,
    border: colors.extraDarkSnow,
    text: colors.black,
    headerText: colors.slate,
  },
  spaces: {
    headerHeight: spaces.s13,
    lineHeight: spaces.s16,
    firstChildLeftSpacing: spaces.s9,
  },
})
