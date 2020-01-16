export default ({ colors, spaces }) => ({
  colors: {
    backgroundEllipse: colors.darkPrimary,
    backgroundRectangle: colors.lightPrimary,
  },
  sizes: {
    height: spaces.s2,
    widthRectangle: spaces.s4,
    widthEllipse: spaces.s2,
    borderRadius: spaces.s3,
    left: spaces.s2,
  },
  spaces: {
    top: spaces.s0_25,
    bottom: spaces.s0_25,
    left: spaces.s0_25,
    right: spaces.s0_5,
  },
})
