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
      backgroundEllipse: colors.white,
      backgroundRectangle: colors.darkGrey,
    },
    on_off: {
      backgroundEllipse: colors.white,
      backgroundRectangle: colors.supportWarning,
      backgroundRectangleAfter: colors.supportSucess,
    },
  },
  sizes: {
    little: {
      heightRectangle: spaces.s1,
      heightEllipse: spaces.s2,
      widthRectangle: spaces.s4,
      widthEllipse: spaces.s2,
      borderRadius: spaces.s3,

      spaces: {
        top: '-8px',
        bottom: 0,
        left: 0,
        right: 0,
      },
      margintop: spaces.s0_75,
    },
    medium: {
      heightRectangle: spaces.s2,
      heightEllipse: spaces.s1_5,
      widthRectangle: spaces.s4,
      widthEllipse: spaces.s1_5,
      borderRadius: spaces.s3,
      spaces: {
        top: spaces.s0_25,
        bottom: spaces.s0_25,
        left: spaces.s0_25,
        right: spaces.s0_5,
      },
    },
    large: {
      heightRectangle: spaces.s2,
      heightEllipse: spaces.s2,
      widthRectangle: spaces.s4,
      widthEllipse: spaces.s2,
      borderRadius: spaces.s3,
    },
    left: spaces.s2,
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
  spaces: {
    top: spaces.s0_25,
    bottom: spaces.s0_25,
    left: spaces.s0_25,
    right: spaces.s0_5,
  },
})
