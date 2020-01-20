export default ({ borders, colors, spaces }) => ({
  borders: {
    borderWidth: borders.widths.bw1,
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
    firstChildLeftSpacing: spaces.s2,
    cell: {
      padding: spaces.s0_75,
      paddingBottom: spaces.s1_5,
    },
    header: {
      padding: spaces.s0_75,
    },
  },
})
