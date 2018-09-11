export default ({ border, colors, fonts, spaces }) => ({
  border: {
    outterBorder: border.widths.bw0,
  },
  colors: {
    background: colors.transparent,
    text: colors.black,
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
