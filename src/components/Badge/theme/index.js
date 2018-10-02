// Create the theme part for Badge. Please add a call into the componentsFactory.
export default ({ colors, fonts, spaces }) => ({
  borders: {
    radius: '50px',
  },
  colors: {
    background: {
      danger: colors.danger,
      success: colors.success,
      warning: colors.warning,
      info: colors.info,
    },
    text: colors.white,
  },
  spaces: {
    paddingHeight: spaces.s2,
    paddingWidth: spaces.s4,
  },
  fonts: {
    fontSize: '0.75em',
    lineHeight: 1,
    fontWeight: fonts.fontWeight.fw600,
  },
  display: 'inline-block',
})
