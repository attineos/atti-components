export default ({ border, colors, spaces }) => ({
  border: {
    color: colors.darkSmoke,
    style: 'solid',
    width: border.widths.bw1,
  },
  colors: {
    background: colors.white,
    selected: colors.successPastel,
    text: colors.primary,
  },
  spaces: {
    padding: spaces.s3,
  },
})
