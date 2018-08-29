export default ({ border, colors, spaces }) => ({
  border: {
    width: border.width.bw1,
    radius: border.radius.br4,
    labelBorder: border.width.bw0,
  },
  colors: {
    text: colors.primary,
    background: colors.secondary,
  },
  spaces: {
    marginBottom: spaces.s3,
  },
})
