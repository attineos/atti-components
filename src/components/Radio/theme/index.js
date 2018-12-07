export default ({ borders, colors, forms, sizes }) => ({
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
      heights: sizes.heights.h10,
      widths: sizes.widths.w10,
    },
  },
})
