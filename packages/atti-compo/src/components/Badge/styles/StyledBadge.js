import styled, { css } from 'styled-components'
import BigText from '../../BigText'

const borders = css`
  border-radius: ${({ theme }) => theme.components.badge.borders.radius};
`

const spaces = css`
  padding: ${({ theme }) =>
    `${theme.components.badge.spaces.paddingHeight} ${theme.components.badge.spaces.paddingWidth}`};
`

const colors = css`
  background-color: ${({ theme, type }) => theme.components.badge.colors.background[type]};
  color: ${({ theme }) => theme.components.badge.colors.text};
`

const fonts = css`
  line-height: ${({ theme }) => theme.components.badge.fonts.lineHeight};
  font-size: ${({ theme }) => theme.components.badge.fonts.fontSize};
  font-weight: ${({ theme }) => theme.components.badge.fonts.fontWeight};
`

const StyledBadge = styled(BigText.withComponent('span'))`
  ${borders}
  ${spaces}
  ${colors}
  ${fonts}
  display: ${({ theme }) => theme.components.badge.display};
`

export default StyledBadge
