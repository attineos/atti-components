export default ({ colors, fonts }) => ({
  normal: {
    colors: {
      text: colors.black,
    },
    fonts: {
      fontFamily: fonts.fontFamily.primary,
      fontSize: fonts.fontSize.fs16,
      fontWeight: fonts.fontWeight.fw400,
      lineHeight: '1.5em',
    },
  },
  error: {
    colors: {
      text: colors.supportDarkDanger,
    },
    fonts: {
      fontFamily: fonts.fontFamily.primary,
      fontSize: fonts.fontSize.fs16,
      fontWeight: fonts.fontWeight.fw400,
      lineHeight: '1.5em',
    },
  },
  warning: {
    colors: {
      text: colors.supportDarkWarning,
    },
    fonts: {
      fontFamily: fonts.fontFamily.primary,
      fontSize: fonts.fontSize.fs16,
      fontWeight: fonts.fontWeight.fw400,
      lineHeight: '1.5em',
    },
  },
})
