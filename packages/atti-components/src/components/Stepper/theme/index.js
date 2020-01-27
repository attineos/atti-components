export default ({ colors, spaces }) => ({
  borders: {
    borderColor: colors.grey,
    borderRadius: '25px',
    borderWidth: 0,
  },

  colors: {
    bulle: colors.primary,
    background: colors.lighterGrey,
    fill: colors.lightPrimary,
    text: colors.black,
  },

  sizes: {
    ellipse: spaces.s4,
    heightBar: spaces.s0_25,
    widthBar: spaces.s16,
    borderRadius: spaces.s3,
    marginTopBar: spaces.s2,
    marginTopH3: spaces.s0_75,
    marginTopT: spaces.s1_5,
    marginTopLabel: spaces.s4,
  },
})
