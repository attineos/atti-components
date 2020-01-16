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
    // toggle size
    little: {
      heightRectangle: spaces.s1,
      heightEllipse: spaces.s2,
      widthRectangle: spaces.s4,
      widthEllipse: spaces.s2,
      borderRadius: spaces.s3,

      spaces: {
        top: '-7px',
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
  spaces: {
    top: spaces.s0_25,
    bottom: spaces.s0_25,
    left: spaces.s0_25,
    right: spaces.s0_5,
  },
})
