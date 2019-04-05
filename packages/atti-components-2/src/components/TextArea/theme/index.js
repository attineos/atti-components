export default ({ forms, spaces }) => ({
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
    sizes: {
      height: spaces.full,
      width: spaces.full,
    },
  },
})
