import React from "react"
import styled from "styled-components"
import { Menu, Text } from "atti-components"
import { Link } from "gatsby"

const CustomLink = styled(Text.withComponent(Link))`
  height: 100%;
  padding: 0
    ${({ theme }) =>
      theme.components.menu.menuDesktop.basic.link.spaces.paddingWidth};
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) =>
    theme.components.menu.menuDesktop.basic.link.colors.text};
  text-decoration: none;
  border-bottom: 0;
  &:hover {
    background-color: ${({ theme }) =>
      theme.components.menu.menuDesktop.basic.link.colors.backgroundHover};
    color: ${({ theme }) =>
      theme.components.menu.menuDesktop.basic.link.colors.textHover};
  }

  &.active {
    ${({ theme }) => `
      background-color: ${theme.components.menu.menuDesktop.basic.link.colors.backgroundHover};
      color: ${theme.components.menu.menuDesktop.basic.link.colors.textHover};
    `}
  }
`

export default CustomLink
