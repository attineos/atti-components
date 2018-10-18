export default ({ colors, forms, sizes, spaces }) => ({
  label: {
    spaces: {
      marginBottom: spaces.s3,
    },
  },
  select: {
    borders: {
      radius: forms.borders.radius,
      width: forms.borders.width,
    },
    colors: {
      arrow: colors.slate,
      background: colors.transparent,
      border: forms.colors.border,
      borderFocus: forms.colors.borderFocus,
      boxShadowFocus: forms.colors.boxShadowFocus,
      separator: colors.extraDarkSmoke,
      text: colors.slate,
    },
    sizes: {
      arrowHeight: '5px',
      arrowWidth: '10px',
      minHeight: forms.sizes.minHeight,
      separatorWidth: sizes.widths.w1,
    },
    spaces: {
      paddingHeight: spaces.s4,
      paddingLeft: spaces.s5,
      paddingRight: spaces.s14,
    },
    shadow: {
      width: forms.shadow.width,
    },
  },
})
