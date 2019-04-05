import styled, { css } from 'styled-components'
import { BigText } from '../../Typography'

const borders = css`
  border: ${({ theme, variance }) =>
    `${theme.components.alert.borders.size} solid ${
      theme.components.alert.colors.borders[variance]
    }`};
  border-radius: ${({ theme }) => theme.components.alert.borders.radius};
`

const spaces = css`
  padding: ${({ theme }) => theme.components.alert.spaces.padding};
`

const sizes = css`
  width: ${({ theme }) => theme.components.alert.sizes.width};
  height: ${({ theme }) => theme.components.alert.sizes.height};
  line-height: ${({ theme }) => theme.components.alert.sizes.lineHeight};
`

const colors = css`
  background-color: ${({ theme, variance }) => theme.components.alert.colors.background[variance]};
  color: ${({ theme, variance }) => theme.components.alert.colors.text[variance]};
`

const fonts = css`
  font-weight: ${({ theme }) => theme.components.alert.fonts.fontWeight};
`

const StyledDiv = styled(BigText.withComponent('div'))`
  ${borders}
  ${spaces}
  ${sizes}
  ${colors}
  ${fonts}
`

export default StyledDiv
