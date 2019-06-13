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
      normal: {
        border: forms.colors.normal.border,
        borderFocus: forms.colors.normal.borderFocus,
        caret: forms.colors.normal.caret,
        placeholder: forms.colors.normal.placeholder,
        text: forms.colors.normal.text,
      },
      error: {
        border: forms.colors.error.border,
        borderFocus: forms.colors.error.borderFocus,
        caret: forms.colors.error.caret,
        placeholder: forms.colors.error.placeholder,
        text: forms.colors.error.text,
      },
      warning: {
        border: forms.colors.warning.border,
        borderFocus: forms.colors.warning.borderFocus,
        caret: forms.colors.warning.caret,
        placeholder: forms.colors.warning.placeholder,
        text: forms.colors.warning.text,
      },
    },
    sizes: {
      height: forms.sizes.height,
      width: spaces.full,
    },
    spaces: {
      paddingHeight: spaces.s0_5,
      paddingWidth: spaces.s0_5,
    },
  },
})
