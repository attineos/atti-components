export default ({ borders, colors, spaces }) => ({
  borders: {
    borderWidth: borders.widths.bw1,
    borderRadius: borders.radius.large,
  },
  colors: {
    background: colors.white,
    backgroundEven: colors.darkWhite,
    backgroundOdd: colors.white,
    backgroundHover: colors.darkerWhite,
    border: colors.darkestWhite,
    text: colors.grey,
    headerText: colors.grey,
  },
  spaces: {
    headerHeight: spaces.s2,
    lineHeight: spaces.s2,
    firstChildLeftSpacing: spaces.s2,
  },
})
