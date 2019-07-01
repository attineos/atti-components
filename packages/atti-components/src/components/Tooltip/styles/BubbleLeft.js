// @noSnapshot
import { css } from 'styled-components'

const getStyle = ({ theme }) => {
  const { components = {}, borders = {}, colors = {}, spaces = {} } = theme
  const { full, halt, s0_5 } = spaces
  const { transparent } = colors
  const { bw8 } = borders.widths
  const { background } = components.tooltip.colors

  return css`
    right: ${full};
    top: ${halt};
    padding-right: ${s0_5};
    transform: translateY(-${halt});

    &::after {
      border-bottom: ${bw8} solid ${transparent};
      border-top: ${bw8} solid ${transparent};
      border-left: ${bw8} solid ${background};
      right: 0;
      top: ${halt};
      transform: translateY(-${halt});
    }
  `
}

const BubbleLeft = css`
  ${getStyle}
`

export default BubbleLeft
