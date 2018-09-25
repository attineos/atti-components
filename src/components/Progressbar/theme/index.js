export default ({ border, colors, sizes }) => ({
  border: {
    borderColor: colors.black,
    borderWidth: border.widths.bw2,
  },

  colors: {
    background: colors.transparent,
    fill: colors.primary,
    text: colors.grey,
  },

  sizes: {
    height: sizes.heights.h8,
    width: sizes.widths.w24,
  },
})
