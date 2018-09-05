export default ({ border, colors, sizes }) => ({
  border: {
    outterBorder: border.widths.bw0,
    radius: border.radius.brCircle,
  },
  colors: {
    background: colors.secondary,
    backgroundHover: colors.primary,
    text: colors.primary,
  },
  sizes: {
    heights: sizes.heights.h8,
    widths: sizes.widths.w8,
    widthCheckSign: sizes.widths.w3,
  },
  spaces: {
    spaceBeforeLabel: sizes.widths.w9,
  },
})
