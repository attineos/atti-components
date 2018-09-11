import styled, { css } from 'styled-components'

const sizes = css`
  height: ${({ height, theme }) =>
    height ? theme.sizes.heights[height] : height || theme.components.img.sizes.height}};
  width: ${({ width, theme }) =>
    width ? theme.sizes.widths[width] : width || theme.components.img.sizes.width};
`

const StyledImage = styled.img`
  ${sizes};
`

export default StyledImage
