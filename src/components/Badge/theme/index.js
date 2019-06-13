// Create the theme part for Badge. Please add a call into the componentsFactory.
export default ({ colors, fonts, spaces }) => ({
  borders: {
    radius: '50px',
  },
  colors: {
    background: {
      danger: colors.supportDanger,
      success: colors.supportSuccess,
      warning: colors.supportWarning,
      info: colors.supportInfo,
    },
    text: colors.white,
  },
  spaces: {
    paddingHeight: spaces.s0_5,
    paddingWidth: spaces.s0_5,
  },
  fonts: {
    fontSize: fonts.fontSize.fs12,
    lineHeight: fonts.lineHeight.lh8,
    fontWeight: fonts.fontWeight.fw600,
    fontFamily: fonts.fontFamily.primary,
    letterSpacing: '1.5px',
  },
  display: 'inline-flex',
})
