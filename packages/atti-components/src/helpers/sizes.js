import { css } from 'styled-components'

import heights from './heights'
import widths from './widths'

/**
 * Inject this style into your component so it can support heights and widths props
 */
export default css`
  ${heights}
  ${widths}
`
