export default ({ borders, colors, forms, opacities, spaces }) => ({
  borders: {
    primary: {
      borderWidth: borders.widths.bw2,
      borderRadius: borders.radius.none,
    },
    neutral: {
      borderWidth: borders.widths.bw2,
      borderRadius: borders.radius.none,
    },
    light: {
      borderWidth: borders.widths.bw2,
      borderRadius: borders.radius.none,
    },
    dark: {
      borderWidth: borders.widths.bw2,
      borderRadius: borders.radius.none,
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
  },
  sizes: {
    height: forms.sizes.height,
  },
  opacities: {
    hover: opacities.o8,
  },
  spaces: {
    paddingHeight: 0,
    paddingWidth: spaces.s1,
  },

  textAlign: 'center',
})
