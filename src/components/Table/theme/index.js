export default ({ borders, colors }) => ({
  borders: {
    borderWidth: borders.widths.bw2,
    borderRadius: borders.radius.br3,
  },
  colors: {
    background: colors.white,
    border: colors.extraDarkSnow,
    text: colors.black,
    headerText: colors.slate,
  },
  spaces: {
    headerHeight: '40px',
    lineHeight: '60px',
    firstChildLeftSpacing: '20px',
  },
})
