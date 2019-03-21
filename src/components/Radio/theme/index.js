export default ({ borders, colors, forms, spaces }) => ({
  radioButton: {
    borders: {
      radius: borders.radius.full,
      width: forms.borders.width,
    },
    colors: {
      backgroundChecked: colors.secondary,
      backgroundHover: colors.primary,
    },
    sizes: {
      heights: spaces.s12,
      widths: spaces.s12,
    },
    spaces: {
      top: spaces.s2,
      bottom: spaces.s2,
      left: spaces.s3,
      right: spaces.s4,
    },
  },
})
