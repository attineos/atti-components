import React from "react"
import styled from "styled-components"

const BehindMenu = styled("div")`
  ${({ theme }) => `
    @media only screen and (min-width: ${theme.breakpoints.tabletMin}) {
      width: ${theme.components.menu.menuMobile.menu.spaces.width};
      min-width: ${theme.components.menu.menuMobile.menu.spaces.width};
    }
  `}
`

export default BehindMenu
