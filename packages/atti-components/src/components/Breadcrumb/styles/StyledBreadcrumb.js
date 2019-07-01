import styled, { css } from 'styled-components'

const fonts = css`
  font-size: ${({ theme }) => theme.components.breadcrumb.fonts.fontSize};
  font-weight: ${({ theme }) => theme.components.breadcrumb.fonts.fontWeight};
  font-family: ${({ theme }) => theme.components.breadcrumb.fonts.fontFamily};
`

const StyledBreadcrumb = styled.div`
  ${fonts};
`

export default StyledBreadcrumb
