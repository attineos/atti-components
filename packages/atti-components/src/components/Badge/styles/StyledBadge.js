import styled, { css } from 'styled-components'

const borders = css`
  border-radius: ${({ theme }) => theme.components.badge.borders.radius};
`

const spaces = css`
  padding: ${({ theme }) =>
    `${theme.components.badge.spaces.paddingHeight} ${theme.components.badge.spaces.paddingWidth}`};
`

const colors = css`
  background-color: ${({ theme, variance }) => theme.components.badge.colors.background[variance]};
  color: ${({ theme }) => theme.components.badge.colors.text};
`

const fonts = css`
  line-height: ${({ theme }) => theme.components.badge.fonts.lineHeight};
  font-size: ${({ theme }) => theme.components.badge.fonts.fontSize};
  font-weight: ${({ theme }) => theme.components.badge.fonts.fontWeight};
  font-family: ${({ theme }) => theme.components.badge.fonts.fontFamily};
  letter-spacing: ${({ theme }) => theme.components.badge.fonts.letterSpacing};
`

const StyledBadge = styled.span`
  ${borders}
  ${spaces}
  ${colors}
  ${fonts}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`

export default StyledBadge
