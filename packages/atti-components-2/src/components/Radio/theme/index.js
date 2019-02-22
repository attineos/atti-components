export default ({ borders, colors, forms, sizes, spaces }) => ({
  radioButton: {
    borders: {
      radius: borders.radius.brCircle,
      width: forms.borders.width,
    },
    colors: {
      backgroundChecked: colors.secondary,
      backgroundHover: colors.primary,
    },
    sizes: {
      heights: sizes.heights.h12,
      widths: sizes.widths.w12,
    },
    spaces: {
      top: spaces.s2,
      bottom: spaces.s2,
      left: spaces.s3,
      right: spaces.s4,
    },
  },
})
