import { css } from 'styled-components'

/**
 * Inject this style into your component so it can support margins props :
 * - mb (margin-bottom)
 * - ml (margin-left)
 * - mr (margin-right)
 * - mt (margin-top)
 *
 * Don't support negative values.
 * Correct values are for example : s4, 150px, 10%
 */
export default ({ mb, ml, mr, mt, theme }) => css`
  ${mb && `margin-bottom: ${theme.spaces[mb] || mb}`};
  ${ml && `margin-left: ${theme.spaces[ml] || ml}`};
  ${mr && `margin-right: ${theme.spaces[mr] || mr}`};
  ${mt && `margin-top: ${theme.spaces[mt] || mt}`};
`
