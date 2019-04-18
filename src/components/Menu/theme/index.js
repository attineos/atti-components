export default ({ colors, spaces }) => ({
  basic: {
    link: {
      colors: {
        backgroundHover: colors.lightNeutral,
        text: colors.grey,
        textHover: colors.darkGrey,
      },
      spaces: {
        paddingWidth: spaces.s4,
      },
    },
    menu: {
      colors: {
        background: colors.lighterNeutral,
      },
      sizes: {
        height: spaces.s3,
      },
    },
  },
  withButtons: {
    link: {
      colors: {
        background: colors.white,
        backgroundSelected: colors.darkWhite,
        backgroundHover: colors.darkerWhite,
        text: colors.grey,
        textSelected: colors.darkGrey,
        textHover: colors.darkerGrey,
        bottomBorder: colors.transparent,
        bottomBorderSelected: colors.primary,
      },
      spaces: {
        paddingWidth: spaces.s4,
      },
    },
    menu: {
      borderRadius: '4px',
      bottomBorder: '2px',
      colors: {
        background: colors.lighterNeutral,
        border: colors.darkWhite,
      },
      sizes: {
        height: spaces.s3,
      },
    },
  },
  withLiftedTabs: {
    link: {
      colors: {
        background: colors.transparent,
        backgroundSelected: colors.transparent,
        backgroundHover: colors.transparent,
        text: colors.grey,
        textSelected: colors.darkGrey,
        textHover: colors.darkerGrey,
      },
      spaces: {
        paddingWidth: spaces.s4,
      },
    },
    menu: {
      borderRadius: '8px',
      border: '1px',
      colors: {
        background: colors.lighterNeutral,
        border: colors.darkWhite,
      },
      sizes: {
        height: spaces.s3,
      },
    },
  },
})
