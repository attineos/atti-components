import styled from "styled-components"

const PageLayout = styled("div")`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktopMin}) {
    padding-left: ${({ theme }) => theme.components.menu.vertical.spaces.width};
  }
`

export default PageLayout
