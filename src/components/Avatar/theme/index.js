export default ({ borders, colors, fonts, spaces }) => ({
  border: {
    radius: borders.radius.brCircle,
  },
  colors: {
    text: colors.white,
  },
  fonts: {
    fontFamily: fonts.fontFamily.primary,
  },
  sizes: {
    small: {
      size: spaces.s10,
      fontSize: fonts.fontSize.fs10,
      lineHeight: fonts.lineHeight.lh10,
    },
    medium: {
      size: spaces.s14,
      fontSize: fonts.fontSize.fs16,
      lineHeight: fonts.lineHeight.lh16,
    },
    large: {
      size: spaces.s18,
      fontSize: fonts.fontSize.fs32,
      lineHeight: fonts.lineHeight.lh32,
    },
  },
})
