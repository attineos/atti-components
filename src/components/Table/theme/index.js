export default ({ borders, colors, spaces }) => ({
  borders: {
    borderWidth: borders.widths.bw1,
    borderRadius: borders.radius.large,
  },
  colors: {
    background: colors.transparent,
    backgroundEven: colors.transparent,
    backgroundOdd: colors.white,
    backgroundHover: colors.darkWhite,
    border: colors.darkerWhite,
    text: colors.grey,
    headerText: colors.grey,
  },
  spaces: {
    headerHeight: spaces.s2,
    lineHeight: spaces.s2,
    firstChildLeftSpacing: spaces.s2,
  },
})
