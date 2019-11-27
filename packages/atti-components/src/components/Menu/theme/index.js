export default ({ colors, fonts, spaces }) => ({
  colors: {
    background: colors.primary,
  },
  spaces: {
    height: spaces.s3,
  },
  item: {
    colors: {
      text: colors.white,
      backgroundHover: colors.lightPrimary,
    },
    spaces: {
      padding: `0 ${spaces.s1_5}`,
    },
    fonts: {
      fontFamily: fonts.fontFamily.primary,
      fontSize: fonts.fontSize.fs16,
      fontWeight: fonts.fontWeight.fw400,
      lineHeight: '1.5em',
    },
  },
  burgerMenu: {
    line: {
      borderRadius: '40px',
      colors: {
        background: colors.white,
      },
      spaces: {
        height: spaces.s0_25,
      },
    },
    spaces: {
      height: spaces.s1_5,
      width: spaces.s2,
    },
  },
  vertical: {
    spaces: {
      width: spaces.s16,
      padding: `${spaces.s4} 0`,
    },
    item: {
      spaces: {
        padding: `${spaces.s0_75} ${spaces.s3}`,
      },
    },
  },
  responsive: {
    colors: {
      background: colors.neutral,
    },
    item: {
      colors: {
        backgroundHover: colors.lightNeutral,
      },
    },
  },
})

// Menu horizontal passe en vertical en responsive + ajout d'un élément pour la "fausse" navbar avec le burger menu
