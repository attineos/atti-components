export default ({ forms, spaces }) => ({
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
    sizes: {
      minHeight: forms.sizes.minHeight,
    },
    spaces: {
      paddingWidth: spaces.s5,
    },
    shadow: {
      width: forms.shadow.width,
    },
  },
  label: {
    spaces: {
      marginBottom: spaces.s4,
    },
  },
})
