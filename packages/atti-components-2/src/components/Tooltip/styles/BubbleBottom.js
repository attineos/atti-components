// @noSnapshot
import { css } from 'styled-components'

const getStyle = ({ theme }) => {
  const { components = {}, borders = {}, colors = {}, spaces = {} } = theme
  const { full, halt, s0_5 } = spaces
  const { transparent } = colors
  const { bw8 } = borders.widths
  const { background } = components.tooltip.colors

  return css`
    top: ${full};
    left: ${halt};
    padding-top: ${s0_5};
    transform: translateX(-${halt});

    &::after {
      border-left: ${bw8} solid ${transparent};
      border-right: ${bw8} solid ${transparent};
      border-bottom: ${bw8} solid ${background};
      top: 0;
      left: ${halt};
      transform: translateX(-${halt});
    }
  `
}

const BubbleBottom = css`
  ${getStyle}
`

export default BubbleBottom
