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
    paddingHeight: spaces.s3,
    paddingWidth: spaces.s4,
  },
  fonts: {
    fontSize: fonts.fontSize.fs8,
    lineHeight: fonts.lineHeight.lh8,
    fontWeight: fonts.fontWeight.fw600,
    fontFamily: fonts.fontFamily.primary,
    letterSpacing: '1.5px',
  },
  display: 'inline-flex',
})
