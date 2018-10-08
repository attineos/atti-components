export default ({ fonts, forms, spaces }) => ({
  input: {
    borders: {
      radius: forms.borders.radius,
      width: forms.borders.width,
    },
    colors: {
      border: forms.colors.border,
      borderFocus: forms.colors.borderFocus,
      boxShadowFocus: forms.colors.boxShadowFocus,
      caret: forms.colors.caret,
      placeholder: forms.colors.placeholder,
      text: forms.colors.text,
    },
    fonts: {
      fontFamily: fonts.fontFamily.primary,
      fontSize: fonts.fontSize.fs16,
    },
    sizes: {
      minHeight: forms.sizes.minHeight,
    },
    spaces: {
      paddingWidth: spaces.s5,
    },
  },
  label: {
    spaces: {
      marginBottom: spaces.s4,
    },
  },
})
