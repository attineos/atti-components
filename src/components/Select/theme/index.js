export default ({ border, colors, fonts, spaces }) => ({
  label: {
    spaces: {
      marginBottom: spaces.s3,
    },
  },
  select: {
    border: {
      width: border.widths.bw2,
      color: colors.primary,
    },
    colors: {
      background: colors.primary,
      text: colors.white,
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
