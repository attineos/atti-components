/**
 * All the rules common to multiple form elements.
 */

export default ({ borders, boxShadows, colors, spaces }) => ({
  borders: {
    radius: borders.radius.medium,
    width: borders.widths.bw1,
  },
  boxShadow: boxShadows.shadow1,
  colors: {
    normal: {
      border: colors.darkerWhite,
      borderFocus: colors.lightGrey,
      caret: colors.lightBlack,
      placeholder: colors.lightGrey,
      text: colors.darkGrey,
    },
    error: {
      border: colors.supportDanger,
      borderFocus: colors.supportDarkDanger,
      caret: colors.supportDarkDanger,
      placeholder: colors.supportDanger,
      text: colors.supportDarkDanger,
    },
    warning: {
      border: colors.supportWarning,
      borderFocus: colors.supportDarkWarning,
      caret: colors.supportDarkWarning,
      placeholder: colors.supportWarning,
      text: colors.supportDarkWarning,
    },
  },
  sizes: {
    height: spaces.s3,
  },
})
