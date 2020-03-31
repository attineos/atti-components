import styled from "styled-components"
import { Menu } from "atti-components"

const LogoLink = styled(Menu.Item)`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spaces.s2};
  &:hover,
  &:focus,
  &.active {
    background-color: ${({ theme }) => theme.colors.transparent};
  }
`

export default LogoLink
