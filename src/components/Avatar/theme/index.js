export default ({ borders, colors, fonts, sizes }) => ({
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
      size: sizes.widths.w10,
      fontSize: fonts.fontSize.fs10,
      lineHeight: fonts.lineHeight.lh10,
    },
    medium: {
      size: sizes.widths.w14,
      fontSize: fonts.fontSize.fs16,
      lineHeight: fonts.lineHeight.lh16,
    },
    large: {
      size: sizes.widths.w18,
      fontSize: fonts.fontSize.fs32,
      lineHeight: fonts.lineHeight.lh32,
    },
  },
})
