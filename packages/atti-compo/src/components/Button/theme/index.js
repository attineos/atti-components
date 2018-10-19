export default ({ borders, colors, forms, opacities, spaces }) => ({
  borders: {
    borderWidth: borders.widths.bw0,
    borderRadius: borders.radius.br3,
  },
  colors: {
    background: colors.primary,
    border: colors.transparent,
    text: colors.white,
  },
  forms: {
    minHeight: forms.sizes.minHeight,
  },
  opacities: {
    hover: opacities.o8,
  },
  spaces: {
    paddingHeight: spaces.s3,
    paddingWidth: spaces.s7,
  },

  textAlign: 'center',
})
