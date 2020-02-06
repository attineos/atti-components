export default ({ colors, spaces, fonts, boxShadows }) => ({
  colors: {
    stepAfter: colors.primary,
    step: colors.grey,
    text: colors.black,
    midText: colors.white,
    bar: colors.grey,
  },
  sizes: {
    marginTopLbl: spaces.s0_5,
    round: spaces.s3,
    borderRadius: spaces.halt,
    alignBar: spaces.s12,
    topBar: spaces.halt,
    leftBar: spaces.full,
  },
  fonts: {
    fontFamily: fonts.fontFamily.primary,
    fontSize: fonts.fontSize.fs14,
    fontSizeMobile: fonts.fontSize.fs12,
  },
  boxShadows: {
    shadow1: boxShadows.shadow1,
    shadow2: boxShadows.shadow2,
  },
})
