export default ({ border, colors, fonts, spaces }) => ({
  label: {
    colors: {
      text: colors.black,
      background: colors.transparent,
    },
    fonts: {
      fontFamily: fonts.fontFamily,
      fontSize: fonts.fontSize.m,
      fontWeight: fonts.fontWeight.fw400,
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
      text: colors.grey,
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
