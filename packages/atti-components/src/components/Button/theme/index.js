export default ({ borders, colors, forms, opacities, spaces }) => ({
  borders: {
    primary: {
      borderWidth: borders.widths.bw2,
      borderRadius: borders.radius.medium,
    },
    neutral: {
      borderWidth: borders.widths.bw2,
      borderRadius: borders.radius.medium,
    },
    normal: {
      borderWidth: borders.widths.bw2,
      borderRadius: borders.radius.medium,
    },
    light: {
      borderWidth: borders.widths.bw2,
      borderRadius: borders.radius.medium,
    },
    dark: {
      borderWidth: borders.widths.bw2,
      borderRadius: borders.radius.medium,
    },
  },
  colors: {
    primary: {
      background: colors.primary,
      border: colors.transparent,
      text: colors.white,
    },
    neutral: {
      background: colors.neutral,
      border: colors.transparent,
      text: colors.white,
    },
    normal: {
      background: colors.transparent,
      border: colors.neutral,
      text: colors.grey,
    },
    light: {
      background: colors.transparent,
      border: colors.white,
      text: colors.white,
    },
    dark: {
      background: colors.transparent,
      border: colors.black,
      text: colors.black,
    },
    disabled: {
      background: colors.lighterGrey,
      border: colors.lightGrey,
      text: colors.white,
    },
  },
  sizes: {
    height: forms.sizes.height,
  },
  opacities: {
    hover: opacities.o8,
  },
  spaces: {
    paddingHeight: spaces.s0_5,
    paddingWidth: spaces.s1,
  },

  textAlign: 'center',
})
