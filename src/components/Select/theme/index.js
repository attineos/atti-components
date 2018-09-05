export default ({ border, colors, fonts, spaces }) => ({
  border: {
    outterBorder: border.widths.bw0,
  },
  colors: {
    background: colors.secondary,
    text: colors.primary,
  },
  fonts: {
    fontFamily: fonts.fontFamily,
    fontSize: fonts.fontSize.l,
    fontWeight: fonts.fontWeight.fw100,
  },
  spaces: {
    marginBottom: spaces.s3,
  },
})
