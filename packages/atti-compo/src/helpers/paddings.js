import { css } from 'styled-components'

/**
 * Inject this style into your component so it can support paddings props :
 * - pb (padding-bottom)
 * - pl (padding-left)
 * - pr (padding-right)
 * - pt (padding-top)
 *
 * Don't support negative values.
 * Correct values are for example : s4, 150px, 10%
 */
export default ({ pb, pl, pr, pt, theme }) => css`
  ${pb && `padding-bottom: ${theme.spaces[pb] || pb}`};
  ${pl && `padding-left: ${theme.spaces[pl] || pl}`};
  ${pr && `padding-right: ${theme.spaces[pr] || pr}`};
  ${pt && `padding-top: ${theme.spaces[pt] || pt}`};
`
