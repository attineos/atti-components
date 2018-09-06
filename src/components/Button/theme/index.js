export default ({ border, colors, spaces }) => ({
  border: {
    borderWidth: border.widths.bw2,
    borderRadius: border.radius.br3,
  },
  colors: {
    background: colors.blue,
    backgroundHover: colors.lightBlue,
    border: colors.transparent,
    text: colors.white,
  },
  spaces: {
    padding: spaces.s5,
  },
})
