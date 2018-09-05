import styled, { css } from 'styled-components'

const sizes = css`
  height: ${({ height, theme }) =>
    height ? theme.sizes.height[height] : height || theme.components.img.sizes.height}};
  width: ${({ width, theme }) =>
    width ? theme.sizes.width[width] : width || theme.components.img.sizes.width};
`

const StyledImage = styled.img`
  ${sizes};
`

export default StyledImage
