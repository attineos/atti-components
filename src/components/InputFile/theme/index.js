export default ({ borders, colors, forms, opacities, spaces }) => ({
  borders: {
    primary: {
      borderWidth: borders.widths.bw2,
      borderRadius: borders.radius.medium,
    },
    secondary: {
      borderWidth: borders.widths.bw2,
      borderRadius: borders.radius.medium,
    },
    normal: {
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
    secondary: {
      background: colors.neutral,
      border: colors.transparent,
      text: colors.white,
    },
    normal: {
      background: colors.transparent,
      border: colors.neutral,
      text: colors.grey,
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
