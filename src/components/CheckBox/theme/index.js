export default ({ borders, colors, forms, sizes, spaces }) => ({
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
      backgroundHover: colors.success,
      backgroundChecked: colors.success,
      border: forms.colors.border,
      borderHover: colors.success,
      borderChecked: colors.success,
    },
    sizes: {
      height: sizes.heights.h10,
      width: sizes.widths.w10,
    },
    spaces: {
      marginRight: spaces.s5,
    },
  },
})
