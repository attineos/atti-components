// Create the theme part for Alert. Please add a call into the componentsFactory.
export default ({ borders, colors, spaces, fonts }) => ({
  colors: {
    background: {
      error: colors.dangerPastel,
      success: colors.successPastel,
      warning: colors.warningPastel,
      info: colors.infoPastel,
    },
    text: {
      error: colors.danger,
      success: colors.success,
      warning: colors.warning,
      info: colors.info,
    },
    borders: {
      error: colors.danger,
      success: colors.success,
      warning: colors.warning,
      info: colors.info,
    },
  },
  spaces: {
    padding: spaces.s6,
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
