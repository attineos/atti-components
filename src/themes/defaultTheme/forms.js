/**
 * All the rules common to multiple form elements.
 */

import borders from './borders'
import boxShadows from './boxShadows'
import colors from './colors'
import sizes from './sizes'

const forms = {
  borders: {
    radius: borders.radius.br3,
    width: borders.widths.bw1,
  },
  boxShadow: boxShadows.shadow1,
  colors: {
    border: colors.extraDarkSmoke,
    borderFocus: colors.extraDarkSmoke,
    caret: colors.steel,
    placeholder: colors.extraDarkSmoke,
    text: colors.steel,
  },
  sizes: {
    minHeight: sizes.heights.h20,
  },
}

export default forms
