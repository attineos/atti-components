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
      heights: sizes.heights.h6,
      widths: sizes.widths.w6,
    },
    spaces: {
      marginRight: spaces.s5,
    },
  },
})
