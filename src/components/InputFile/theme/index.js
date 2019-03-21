export default ({ borders, colors, forms, opacities, spaces }) => ({
  borders: {
    borderWidth: borders.widths.bw0,
    borderRadius: borders.radius.medium,
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
    paddingHeight: spaces.s6,
    paddingWidth: spaces.s10,
  },

  textAlign: 'center',
})
