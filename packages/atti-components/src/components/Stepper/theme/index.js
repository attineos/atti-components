export default ({ colors, spaces, fonts }) => ({
  borders: {
    borderColor: colors.grey,
    borderRadius: '25px',
    borderWidth: 0,
  },

  colors: {
    bulle: colors.primary,
    background: colors.lighterGrey,
    text: colors.black,
    hover: colors.darkPrimary,
  },

  sizes: {
    ellipse: spaces.s4,
    heightBar: spaces.s0_25,
    widthBar: spaces.s16,
    borderRadius: spaces.s3,
    marginTopBar: spaces.s2,
    marginTopH3: spaces.s0_75,
    marginTopT: spaces.s1_5,
    marginTopLabel: spaces.s1_5,
  },
  fonts: {
    fontFamily: fonts.fontFamily.primary,
    fontSize: fonts.fontSize.fs18,
  },
})
