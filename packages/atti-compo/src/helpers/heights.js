import { css } from 'styled-components'

/**
 * Inject this style into your component so it can support heights props :
 * - maxH (max-height)
 * - minH (min-height)
 * - h (height)
 *
 * Don't support negative values.
 * Correct values are for example : h4, 150px, 10%
 */
export default ({ maxH, minH, h, theme }) => css`
  ${maxH && `max-height: ${theme.sizes.heights[maxH] || maxH}`};
  ${minH && `min-height: ${theme.sizes.heights[minH] || minH}`};
  ${h && `height: ${theme.sizes.heights[h] || h}`};
`
