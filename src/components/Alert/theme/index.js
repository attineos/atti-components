// Create the theme part for Alert. Please add a call into the componentsFactory.
export default ({ border, colors, spaces, fonts }) => ({
  colors: {
    background: {
      error: colors.lightRed,
      success: colors.lightGreen,
      warning: colors.lightOrange,
      info: colors.lightBlue,
    },
    text: {
      error: colors.darkRed,
      success: colors.darkGreen,
      warning: colors.darkOrange,
      info: colors.darkBlue,
    },
    border: {
      error: colors.red,
      success: colors.green,
      warning: colors.orange,
      info: colors.blue,
    },
  },
  spaces: {
    padding: spaces.s6,
  },
  border: {
    radius: border.radius.br3,
    size: border.widths.bw1,
  },
  sizes: {
    width: '90%',
  },
  fonts: {
    fontWeight: fonts.fontWeight.fw800,
    lineHeight: fonts.lineHeight.lh10,
  },
})
