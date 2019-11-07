export default ({ borders, colors, spaces }) => ({
  borders: {
    radius: borders.radius.medium,
    titleBottomColor: colors.black,
    titleBottomWidth: borders.widths.bw1,
  },
  boxShadows: {
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 20px',
  },
  colors: {
    background: colors.white,
  },
  spaces: {
    paddingHeightContent: spaces.s1,
    paddingHeightTitle: spaces.s1,
    paddingWidthContent: spaces.s2,
    paddingWidthTitle: spaces.s2,
  },
})
