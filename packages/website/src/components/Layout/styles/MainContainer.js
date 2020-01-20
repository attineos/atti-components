import styled from "styled-components"
import { Container } from "atti-components"

const MainContainer = styled(Container.withComponent("main"))`
  margin-bottom: ${({ theme }) => theme.spaces.s3};
`

export default MainContainer
