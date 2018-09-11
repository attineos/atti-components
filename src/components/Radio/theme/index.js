export default ({ border, colors, sizes, spaces }) => ({
  radioButton: {
    border: {
      radius: border.radius.brCircle,
    },
    colors: {
      background: colors.secondary,
      backgroundHover: colors.primary,
      text: colors.primary,
    },
    sizes: {
      heights: sizes.heights.h8,
      widths: sizes.widths.w8,
    },
    spaces: {
      marginRight: spaces.s7,
    },
  },
})
