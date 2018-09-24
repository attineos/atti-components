export default ({ colors, fonts, spaces }) => ({
  breadcrumbSeparator: {
    spaces: {
      marginLeft: spaces.s3,
      marginRight: spaces.s3,
    },
  },
  currentElement: {
    colors: {
      text: colors.darkGrey,
    },
  },
  fonts: {
    fontFamily: fonts.fontFamily,
    fontSize: fonts.fontSize.fs14,
    fontWeight: fonts.fontWeight.fw100,
  },
  spaces: {
    marginBottom: spaces.s4,
  },
})