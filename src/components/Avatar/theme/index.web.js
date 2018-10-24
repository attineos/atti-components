export default ({ border, colors, fonts, sizes, spaces }) => ({
  border: {
    radius: border.radius.brCircle,
  },
  colors: {
    background: colors.primary,
    text: colors.white,
  },
  spaces: {
    padding: spaces.s3,
    paddingRight: spaces.s3,
  },
  fonts: {
    fontFamily: fonts.global.fontFamilyPrimary,
    fontSize: fonts.fontSize.fs24,
    lineHeight: fonts.lineHeight.lh56,
  },
  sizes: {
    size: sizes.widths.w14,
  },
})
