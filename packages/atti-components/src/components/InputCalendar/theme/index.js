export default ({ spaces, colors }) => ({
  maxWidth: '400px',

  colors: {
    notSameMonth: colors.grey,
    sunday: colors.darkGrey,
    today: colors.darkerPrimary,
    selected: colors.white,
    backgroundSelected: colors.primary,
  },

  spaces: {
    paddingTop: spaces.s0_5,
    paddingLeft: spaces.s0_5,
    paddingBottom: spaces.s0_5,
    paddingRight: spaces.s0_5,
  },

  day: {
    width: '30px',
    height: '30px',
  },

  week: {
    spaces: {
      paddingTop: spaces.s0_25,
      paddingLeft: spaces.s0,
      paddingBottom: spaces.s0_25,
      paddingRight: spaces.s0,
    },
  },
})
