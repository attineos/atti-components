export default ({ borders, colors, forms, spaces }) => ({
  checkBoxBox: {
    borders: {
      radius: forms.borders.radius,
      width: forms.borders.width,
    },
    checkSign: {
      color: colors.white,
      thickness: borders.widths.bw3,
    },
    colors: {
      backgroundHover: colors.primary,
      backgroundChecked: colors.lightPrimary,
      border: forms.colors.border,
      borderHover: forms.colors.borderFocus,
      borderChecked: forms.colors.border,
    },
    sizes: {
      height: spaces.s1,
      width: spaces.s1,
    },
    spaces: {
      top: spaces.s0_25,
      bottom: spaces.s0_25,
      left: spaces.s0_25,
      right: spaces.s0_5,
    },
  },
})
