export default ({ borders, colors, forms, spaces }) => ({
  radioButton: {
    borders: {
      radius: borders.radius.full,
      width: forms.borders.width,
    },
    colors: {
      backgroundHover: colors.primary,
      backgroundChecked: colors.lightPrimary,
      border: forms.colors.border,
      borderHover: forms.colors.borderFocus,
      borderChecked: forms.colors.border,
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
