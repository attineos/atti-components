import styled, { css } from 'styled-components'

const colors = css`
  color: ${({ theme }) => theme.components.link.colors.text};
`

// TODO: should inherit its font values when other components (like Paragraph) will be ready
const fonts = css`
  font-size: ${({ theme }) => theme.components.link.fonts.fontSize};
  font-weight: ${({ theme }) => theme.components.link.fonts.fontWeight};
  font-family: ${({ theme }) => theme.components.link.fonts.fontFamily};
`

const StyledLink = styled.a`
  ${colors};
  ${fonts};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export default StyledLink
