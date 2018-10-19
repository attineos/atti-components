export default ({ animations, borders, colors, sizes }) => ({
  animations: {
    speed: animations.duration.d8,
    type: animations.type.linear,
  },
  borders: {
    radius: borders.radius.brCircle,
    thickness: sizes.widths.w5,
  },
  colors: {
    colorIndicator: colors.primary,
    backgroundColor: colors.white,
  },
  size: sizes.widths.w16,
})
