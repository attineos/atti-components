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
      backgroundChecked: colors.secondary,
      border: forms.colors.border,
      borderHover: colors.darkSecondary,
      borderChecked: colors.darkSecondary,
    },
    sizes: {
      height: spaces.s12,
      width: spaces.s12,
    },
    spaces: {
      top: spaces.s2,
      bottom: spaces.s2,
      left: spaces.s3,
      right: spaces.s4,
    },
  },
})
