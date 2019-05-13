export default ({ colors, fonts }) => ({
  colors: {
    text: colors.lightBlack,
  },
  fonts: {
    fontFamily: fonts.fontFamily.primary,
    fontSize: fonts.fontSize.fs48,
    fontWeight: fonts.fontWeight.fw500,
    lineHeight: '1.1em',
    mobile: {
      fontSize: fonts.fontSize.fs36,
    },
  },
})
