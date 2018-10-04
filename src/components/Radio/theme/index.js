export default ({ border, colors, sizes, spaces }) => ({
  radioButton: {
    border: {
      radius: border.radius.brCircle,
    },
    colors: {
      background: colors.primary,
      backgroundHover: colors.primary,
      text: colors.primary,
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
