export default ({ border, colors, opacities, spaces }) => ({
  border: {
    borderWidth: border.widths.bw2,
    borderRadius: border.radius.br3,
  },
  colors: {
    background: colors.primary,
    border: colors.slate,
    text: colors.white,
  },
  opacities: {
    hover: opacities.o8,
  },
  spaces: {
    padding: spaces.s5,
  },
})
