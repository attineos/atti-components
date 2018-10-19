export default ({ forms, spaces }) => ({
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
    spaces: {
      padding: spaces.s5,
    },
  },
})
