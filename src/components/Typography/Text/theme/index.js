export default ({ colors, fonts }) => ({
  normal: {
    colors: {
      text: colors.black,
    },
    fonts: {
      fontFamily: fonts.fontFamily.primary,
      fontSize: fonts.fontSize.fs14,
      fontWeight: fonts.fontWeight.fw400,
      lineHeight: fonts.lineHeight.lh24,
    },
  },
  error: {
    colors: {
      text: colors.supportDarkDanger,
    },
    fonts: {
      fontFamily: fonts.fontFamily.primary,
      fontSize: fonts.fontSize.fs14,
      fontWeight: fonts.fontWeight.fw400,
      lineHeight: fonts.lineHeight.lh24,
    },
  },
  warning: {
    colors: {
      text: colors.supportDarkWarning,
    },
    fonts: {
      fontFamily: fonts.fontFamily.primary,
      fontSize: fonts.fontSize.fs14,
      fontWeight: fonts.fontWeight.fw400,
      lineHeight: fonts.lineHeight.lh24,
    },
  },
})
