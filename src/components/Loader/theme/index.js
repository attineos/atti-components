export default ({ animations, border, colors, sizes }) => ({
  animations: {
    speed: animations.duration.d8,
    type: animations.type.linear,
  },
  borders: {
    radius: border.radius.brCircle,
    thickness: sizes.widths.w4,
  },
  colors: {
    colorIndicator: colors.primary,
    backgroundColor: colors.white,
  },
  size: sizes.widths.w12,
})
