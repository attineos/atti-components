export default ({ borders, colors, spaces }) => ({
  borders: {
    borderWidth: borders.widths.bw1,
    borderRadius: borders.radius.large,
  },
  colors: {
    background: colors.transparent,
    backgroundEven: colors.transparent,
    backgroundOdd: colors.white,
    border: colors.darkWhite,
    text: colors.grey,
    headerText: colors.grey,
  },
  spaces: {
    headerHeight: spaces.s25,
    lineHeight: spaces.s22,
    firstChildLeftSpacing: spaces.s20,
  },
})
