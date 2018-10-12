/**
 * All the rules common to multiple form elements.
 */

import borders from './borders'
import colors from './colors'
import sizes from './sizes'

const forms = {
  borders: {
    radius: borders.radius.br3,
    width: borders.widths.bw2,
  },
  colors: {
    border: colors.extraDarkSmoke,
    borderFocus: colors.secondary,
    boxShadowFocus: colors.secondary,
    caret: colors.steel,
    placeholder: colors.extraDarkSmoke,
    text: colors.steel,
  },
  sizes: {
    minHeight: sizes.h11,
  },
}

export default forms
