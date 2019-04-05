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
      size: spaces.s15,
      fontSize: fonts.fontSize.fs10,
      lineHeight: fonts.lineHeight.lh10,
    },
    medium: {
      size: spaces.s25,
      fontSize: fonts.fontSize.fs16,
      lineHeight: fonts.lineHeight.lh16,
    },
    large: {
      size: spaces.s35,
      fontSize: fonts.fontSize.fs32,
      lineHeight: fonts.lineHeight.lh32,
    },
  },
})
