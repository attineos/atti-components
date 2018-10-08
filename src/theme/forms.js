/**
 * All the rules common to multiple form elements.
 */

import borders from './borders'
import colors from './colors'

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
    minHeight: '36px',
  },
}

export default forms
