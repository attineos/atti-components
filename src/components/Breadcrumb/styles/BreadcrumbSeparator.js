import styled, { css } from 'styled-components'

const fonts = css`
  font-size: ${({ theme }) => theme.components.breadcrumb.fonts.fontSize};
  font-weight: ${({ theme }) => theme.components.breadcrumb.fonts.fontWeight};
  font-family: ${({ theme }) => theme.components.breadcrumb.fonts.fontFamily};
`

const BreadcrumbSeparator = styled.span`
  ${fonts};
  margin-left: ${({ theme }) => theme.components.breadcrumb.breadcrumbSeparator.spaces.marginLeft};
  margin-right: ${({ theme }) =>
    theme.components.breadcrumb.breadcrumbSeparator.spaces.marginRight};
`

export default BreadcrumbSeparator
