// Create the theme part for Alert. Please add a call into the componentsFactory.
export default ({ border, colors, spaces, fonts }) => ({
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
    border: {
      error: colors.danger,
      success: colors.success,
      warning: colors.warning,
      info: colors.info,
    },
  },
  spaces: {
    padding: spaces.s6,
  },
  border: {
    radius: border.radius.br3,
    size: border.widths.bw2,
  },
  sizes: {
    width: 'auto',
  },
  fonts: {
    fontWeight: fonts.fontWeight.fw500,
    lineHeight: fonts.lineHeight.lh10,
  },
})
