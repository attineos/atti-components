// Create the theme part for Alert. Please add a call into the componentsFactory.
export default ({ borders, colors, spaces, fonts }) => ({
  colors: {
    background: {
      error: colors.supportLightDanger,
      success: colors.supportLightSuccess,
      warning: colors.supportLightWarning,
      info: colors.supportLightInfo,
    },
    text: {
      error: colors.supportDarkDanger,
      success: colors.supportDarkSuccess,
      warning: colors.supportDarkWarning,
      info: colors.supportDarkInfo,
    },
    borders: {
      error: colors.supportDanger,
      success: colors.supportSuccess,
      warning: colors.supportWarning,
      info: colors.supportInfo,
    },
  },
  spaces: {
    padding: spaces.s0_5,
  },
  borders: {
    radius: borders.radius.medium,
    size: borders.widths.bw2,
  },
  sizes: {
    width: 'auto',
  },
  fonts: {
    fontWeight: fonts.fontWeight.fw500,
    lineHeight: fonts.lineHeight.lh10,
  },
})
