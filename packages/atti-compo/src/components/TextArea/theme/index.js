export default ({ border, colors, spaces }) => ({
  border: {
    widths: border.widths.bw1,
    radius: border.radius.br4,
    labelBorder: border.widths.bw0,
  },
  colors: {
    text: colors.primary,
    background: colors.secondary,
  },
  spaces: {
    marginBottom: spaces.s3,
  },
})
