export default ({ border, colors, fonts, spaces }) => ({
  label: {
    colors: {
      text: colors.black,
      background: colors.transparent,
    },
    fonts: {
      fontFamily: fonts.fontFamily,
      fontSize: fonts.fontSize.fs14,
      fontWeight: fonts.fontWeight.fw500,
    },
    spaces: {
      marginBottom: spaces.s5,
    },
  },
  textarea: {
    border: {
      width: border.widths.bw1,
      color: colors.black,
    },
    colors: {
      text: colors.slate,
      background: colors.transparent,
    },
    fonts: {
      fontFamily: fonts.fontFamily,
      fontSize: fonts.fontSize.m,
      fontWeight: fonts.fontWeight.fw400,
    },
    spaces: {
      padding: spaces.s4,
    },
  },
})
