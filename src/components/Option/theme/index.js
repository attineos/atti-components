export default ({ border, colors, spaces }) => ({
  border: {
    color: colors.black,
    style: 'solid',
    width: border.widths.bw1,
  },
  colors: {
    background: colors.white,
    selected: colors.secondary,
    text: colors.primary,
  },
  spaces: {
    padding: spaces.s3,
  },
})
