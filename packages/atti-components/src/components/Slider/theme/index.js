export default ({animations, borders, colors, elevations, spaces}) => ({
  sliderRail: {
    borders: {
      radius: borders.radius.small,
    },
    colors: {
      backgroundColor: colors.darkPrimary,
    },
    sizes: {
      height: spaces.s0_25,
      width: spaces.s16,
    },
  },
  sliderIndicator: {
    animation: {
      animationDuration: animations.duration.d3,
      animationType: animations.type.easeIn,
    },
    borders: {
      radius: borders.radius.full,
    },
    colors: {
      backgroundColor: colors.primary,
    },
    elevations: {
      zIndex: elevations.z2,
    },
    sizes: {
      height: spaces.s0_5,
      width: spaces.s0_5,
    },
    shadows: {
      hover: '0px 0px 0px 4px rgba(18,43,181, 0.4)',
      moving: '0px 0px 0px 8px rgba(18,43,181,0.16)',
    },
    valueLabel: {
      height: '32px',
      width: '32px',
    }
  },
  sliderStep: {
    colors: {
      backgroundColor: colors.lighterNeutral,
    },
    elevations: {
      zIndex: elevations.z1,
    },
    sizes: {
      height: spaces.s0_25,
      width: borders.widths.bw2,
    },
    title: {
      margins: {
        marginTop: spaces.s1,
      }
    }
  },
  sliderValue: {
    animationDuration: animations.duration.d3,
    animationType: animations.type.easeIn,
    backgroundColor: colors.primary,
    bottom: spaces.s1_5,
    color: colors.white,
    height: spaces.s2,
    width: spaces.s2,
  }
})
