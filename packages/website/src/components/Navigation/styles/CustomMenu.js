import React from "react"
import styled from "styled-components"
import { Menu } from "atti-components"

// TODO: improve
const CustomMenu = styled(Menu)`
  ${({ theme }) => `
    @media only screen and (min-width: ${theme.breakpoints.tabletMin}) {
      height: 100%;
    }
  `}
  > nav {
    padding: 0;
    > nav {
      overflow: auto;
    }
  }
`

export default CustomMenu
