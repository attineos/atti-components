export default ({ colors, fonts }) => ({
  colors: {
    text: colors.lightBlack,
  },
  fonts: {
    fontFamily: fonts.fontFamily.primary,
    fontSize: fonts.fontSize.fs72,
    fontWeight: fonts.fontWeight.fw700,
    lineHeight: '1em',
    mobile: {
      fontSize: fonts.fontSize.fs48,
    },
  },
})
