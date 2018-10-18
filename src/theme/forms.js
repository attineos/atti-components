/**
 * All the rules common to multiple form elements.
 */

import borders from './borders'
import colors from './colors'
import sizes from './sizes'

const forms = {
  borders: {
    radius: borders.radius.br3,
    width: borders.widths.bw1,
  },
  colors: {
    border: colors.extraDarkSmoke,
    borderFocus: colors.extraDarkSmoke,
    boxShadowFocus: colors.primary,
    caret: colors.steel,
    placeholder: colors.extraDarkSmoke,
    text: colors.steel,
  },
  sizes: {
    minHeight: sizes.heights.h11,
  },
  shadow: {
    width: sizes.widths.w3,
  },
}

export default forms
