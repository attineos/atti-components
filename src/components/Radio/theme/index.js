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
      heights: spaces.s1,
      widths: spaces.s1,
    },
    spaces: {
      top: spaces.s0_25,
      bottom: spaces.s0_25,
      left: spaces.s0_25,
      right: spaces.s0_5,
    },
  },
})
