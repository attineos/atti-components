export default ({ colors, spaces }) => ({
  menuDesktop: {
    basic: {
      link: {
        colors: {
          backgroundHover: colors.lightNeutral,
          text: colors.white,
          textHover: colors.white,
        },
        spaces: {
          paddingWidth: spaces.s4,
        },
      },
      menu: {
        colors: {
          background: colors.neutral,
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
          backgroundSelected: colors.darkerWhite,
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
          border: colors.darkerWhite,
        },
        sizes: {
          height: spaces.s3,
        },
      },
    },
  },
  menuMobile: {
    link: {
      colors: {
        backgroundSelected: colors.lightNeutral,
        backgroundHover: colors.lightNeutral,
        text: colors.white,
        textHover: colors.white,
        textSelected: colors.white,
      },
      spaces: {
        marginHeight: spaces.s0_5,
        paddingHeight: spaces.s0_75,
        paddingWidth: spaces.s1_5,
      },
    },
    menu: {
      colors: {
        background: colors.neutral,
      },
      spaces: {
        paddingHeight: spaces.s1,
        width: spaces.s16,
      },
    },
    opener: {
      line: {
        borderRadius: '40px',
        colors: {
          background: colors.neutral,
        },
        spaces: {
          height: spaces.s0_25,
          width: spaces.s3,
        },
      },
      spaces: {
        height: spaces.s2,
      },
    },
  },
})
