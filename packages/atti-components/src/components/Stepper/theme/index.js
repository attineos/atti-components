export default ({ colors, spaces, fonts }) => ({
  colors: {
    stepAfter: colors.primary,
    step: colors.grey,
    text: colors.black,
    midText: colors.white,
  },

  sizes: {
    element: spaces.s4,
    borderRadius: spaces.s3,
    marginTopLabel: spaces.s1_5,
  },
  fonts: {
    fontFamily: fonts.fontFamily.primary,
    fontSize: fonts.fontSize.fs18,
  },
})
