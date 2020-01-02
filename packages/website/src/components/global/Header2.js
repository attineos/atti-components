import styled from "styled-components"
import { Header2 as H2 } from "atti-components"

const Header2 = styled(H2)`
  margin-bottom: ${({ theme }) => theme.spaces.s1};
  margin-top: ${({ theme }) => theme.spaces.s3};
`

export default Header2
