export default ({ colors, spaces }) => ({
  colors: {
    primary: {
      backgroundEllipse: colors.darkPrimary,
      backgroundRectangle: colors.lightPrimary,
    },
    neutral: {
      backgroundEllipse: colors.darkNeutral,
      backgroundRectangle: colors.lightNeutral,
    },
    disabled: {
      backgroundEllipse: colors.darkerWhite,
      backgroundRectangle: colors.grey,
    },
    on_off: {
      backgroundEllipse: colors.darkerWhite,
      backgroundRectangle: colors.supportDanger,
      backgroundRectangleAfter: colors.supportSucess,
    },
  },
  sizes: {
    height: spaces.s2,
    widthRectangle: spaces.s4,
    widthEllipse: spaces.s2,
    borderRadius: spaces.s3,

    // Position: left or right
    default: {
      initial: 0,
      changePos: spaces.s2,
    },
    reverse: {
      initial: spaces.s2,
      changePos: 0,
    },
  },
  // Click activated or disable
  display: {
    true: {
      display: 0,
    },
    false: {
      display: 'none',
    },
  },
})
