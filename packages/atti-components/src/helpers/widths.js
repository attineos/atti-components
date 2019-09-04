import { css } from 'styled-components'

/**
 * Inject this style into your component so it can support widths props :
 * - maxW (max-width)
 * - minW (min-width)
 * - w (width)
 *
 * Don't support negative values.
 * Correct values are for example : s4, 150px, 10%
 */
export default ({ maxW, minW, w, theme }) => css`
  ${maxW && `max-width: ${theme.spaces[maxW] || maxW}`};
  ${minW && `min-width: ${theme.spaces[minW] || minW}`};
  ${w && `width: ${theme.spaces[w] || w}`};
`
