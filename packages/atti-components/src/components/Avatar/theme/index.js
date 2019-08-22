export default ({ borders, colors, fonts, spaces }) => ({
  border: {
    radius: borders.radius.full,
  },
  colors: {
    text: colors.white,
  },
  fonts: {
    fontFamily: fonts.fontFamily.primary,
  },
  sizes: {
    small: {
      size: spaces.s1_5,
      fontSize: fonts.fontSize.fs12,
      lineHeight: fonts.lineHeight.lh10,
    },
    medium: {
      size: spaces.s2,
      fontSize: fonts.fontSize.fs16,
      lineHeight: fonts.lineHeight.lh16,
    },
    large: {
      size: spaces.s4,
      fontSize: fonts.fontSize.fs30,
      lineHeight: fonts.lineHeight.lh32,
    },
  },
})
