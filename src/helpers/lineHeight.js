import { css } from 'styled-components'

const getLineHeight = (lh, theme) => {
  // Handle special value
  if (lh === 'form') {
    return theme.forms.sizes.minHeight
  }

  return theme.sizes.heights[lh] || lh
}

/**
 * Inject this style into your component so it can support dynamic line height:
 * - lh (line-height)
 * By default, line Height will be set to your theme's forms line height
 */
export default ({ lh, theme }) => css`
  line-height: ${getLineHeight(lh, theme)};
`
