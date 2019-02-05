export default ({ colors, forms, sizes, spaces }) => ({
  select: {
    borders: {
      radius: forms.borders.radius,
      width: forms.borders.width,
    },
    boxShadows: {
      boxShadowFocus: forms.boxShadow,
    },
    colors: {
      arrow: colors.slate,
      background: colors.transparent,
      border: forms.colors.border,
      borderFocus: forms.colors.borderFocus,
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
      paddingRight: spaces.s11,
    },
  },
})
