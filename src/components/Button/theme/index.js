export default ({ border, colors, spaces }) => ({
  border: {
    borderWidth: border.width.bw2,
    borderRadius: border.radius.br3,
  },
  colors: {
    background: colors.secondary,
    backgroundHover: colors.grey,
    border: colors.black,
    text: colors.white,
  },
  spaces: {
    padding: spaces.s5,
  },
})
