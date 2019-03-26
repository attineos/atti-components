export default ({ colors, spaces }) => ({
  basic: {
    link: {
      colors: {
        backgroundHover: colors.lightNeutral,
        text: colors.grey,
        textHover: colors.darkGrey,
      },
      spaces: {
        paddingWidth: spaces.s20,
      },
    },
    menu: {
      colors: {
        background: colors.lighterNeutral,
      },
      sizes: {
        height: spaces.s30,
      },
    },
  },
  withButtons: {
    link: {
      colors: {
        background: colors.transparent,
        backgroundHover: colors.darkWhite,
        text: colors.grey,
        textHover: colors.darkGrey,
      },
    },
    menu: {
      borderRadius: '4px',
      colors: {
        background: colors.lighterNeutral,
        border: colors.darkWhite,
      },
      sizes: {
        height: spaces.s30,
        width: spaces.full,
      },
    },
  },
})
