export default ({ animations, borders, colors, opacities, spaces }) => ({
  animations: {
    opacityEnd: opacities.o10,
    opacityStart: opacities.o0,
    speed: animations.duration.d3,
  },
  borders: {
    radius: borders.radius.large,
  },
  colors: {
    background: colors.darkPrimary,
    text: colors.darkWhite,
  },
  spaces: {
    maxWidth: spaces.s12,
    minWidth: spaces.s8,
    padding: spaces.s0_5,
  },
})
