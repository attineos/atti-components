export default ({ animations, borders, colors, spaces }) => ({
  animations: {
    speed: animations.duration.d8,
    type: animations.type.linear,
  },
  borders: {
    radius: borders.radius.full,
    thickness: spaces.s2,
  },
  colors: {
    colorIndicator: colors.primary,
    backgroundColor: colors.white,
  },
  size: spaces.s16,
})
