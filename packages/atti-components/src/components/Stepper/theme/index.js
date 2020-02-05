import borders from '../../../themes/defaultTheme/borders'

export default ({ colors, spaces, fonts, boxShadows }) => ({
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

    marginTopBar: spaces.halt,
    topBar: 0,
    rightBar: '-200%',
    widthBar: '200%',
    borderBottomBar: `${borders.widths.bw3} solid ${colors.darkerGrey}`,
  },
  fonts: {
    fontFamily: fonts.fontFamily.primary,
    fontSize: fonts.fontSize.fs18,
  },
  boxShadows: {
    shadow1: boxShadows.shadow1,
    shadow2: boxShadows.shadow2,
  },
})
