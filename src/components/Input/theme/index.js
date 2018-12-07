export default ({ forms, spaces }) => ({
  input: {
    borders: {
      radius: forms.borders.radius,
      width: forms.borders.width,
    },
    boxShadows: {
      boxShadowFocus: forms.boxShadow,
    },
    colors: {
      border: forms.colors.border,
      borderFocus: forms.colors.borderFocus,
      caret: forms.colors.caret,
      placeholder: forms.colors.placeholder,
      text: forms.colors.text,
    },
    sizes: {
      minHeight: forms.sizes.minHeight,
    },
    spaces: {
      paddingWidth: spaces.s5,
    },
  },
})
