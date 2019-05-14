export default ({ colors, fonts, spaces }) => ({
  breadcrumbSeparator: {
    color: colors.grey,
    spaces: {
      marginLeft: spaces.s0_25,
      marginRight: spaces.s0_25,
    },
  },
  currentElement: {
    colors: {
      text: colors.grey,
    },
  },
  fonts: {
    fontFamily: fonts.fontFamily.primary,
    fontSize: fonts.fontSize.fs14,
    fontWeight: fonts.fontWeight.fw100,
  },
  spaces: {
    marginBottom: spaces.s0_5,
  },
})
