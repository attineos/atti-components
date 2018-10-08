export default ({ borders, colors, forms, sizes, spaces }) => ({
  checkboxBox: {
    borders: {
      radius: forms.borders.radius,
      width: forms.borders.width,
    },
    checkSign: {
      color: colors.white,
      thickness: borders.widths.bw3,
    },
    colors: {
      backgroundHover: colors.success,
      backgroundChecked: colors.success,
      border: forms.colors.border,
      borderHover: colors.success,
      borderChecked: colors.success,
    },
    sizes: {
      height: sizes.heights.h6,
      width: sizes.widths.w6,
    },
    spaces: {
      marginRight: spaces.s5,
    },
  },
})
