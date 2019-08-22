export default ({ colors, forms, spaces }) => ({
  select: {
    borders: {
      radius: forms.borders.radius,
      width: forms.borders.width,
    },
    boxShadows: {
      boxShadowFocus: forms.boxShadow,
    },
    colors: {
      border: forms.colors.normal.border,
      borderFocus: forms.colors.normal.borderFocus,
      caret: forms.colors.normal.caret,
      placeholder: forms.colors.normal.placeholder,
      text: forms.colors.normal.text,

      arrow: colors.grey,
      background: colors.transparent,
      separator: forms.colors.normal.border,
    },
    sizes: {
      arrowHeight: '5px',
      arrowWidth: '10px',
      height: forms.sizes.height,
      separatorWidth: '2px',
      width: spaces.full,
    },
    spaces: {
      paddingTop: spaces.s0_5,
      paddingLeft: spaces.s0_5,
      paddingBottom: spaces.s0_5,
      paddingRight: spaces.s3,
    },
  },
})
