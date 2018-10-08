export default ({ fonts, forms, spaces }) => ({
  label: {
    spaces: {
      marginBottom: spaces.s5,
    },
  },
  textarea: {
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
    spaces: {
      padding: spaces.s5,
    },
  },
})
