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
      border: forms.colors.normal.border,
      borderFocus: forms.colors.normal.borderFocus,
      caret: forms.colors.normal.caret,
      placeholder: forms.colors.normal.placeholder,
      text: forms.colors.normal.text,
    },
    spaces: {
      padding: spaces.s0_5,
    },
    sizes: {
      height: spaces.full,
      width: spaces.full,
    },
  },
})
