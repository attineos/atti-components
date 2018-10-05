export default ({ borders, colors, forms, spaces }) => ({
  input: {
    borders: {
      radius: borders.radius.br3,
      width: borders.widths.bw2,
    },
    colors: {
      background: colors.white,
      border: colors.extraDarkSmoke,
      caret: colors.steel,
      placeholder: colors.extraDarkSmoke,
      text: colors.steel,
    },
    forms: {
      minHeight: forms.sizes.minHeight,
    },
  },
  label: {
    spaces: {
      marginBottom: spaces.s4,
    },
  },
})
