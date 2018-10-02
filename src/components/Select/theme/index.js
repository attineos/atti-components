export default ({ border, colors, fonts, spaces }) => ({
  label: {
    spaces: {
      marginBottom: spaces.s3,
    },
  },
  select: {
    border: {
      width: border.widths.bw1,
      color: colors.black,
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
  },
})
