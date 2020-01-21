import styled from "styled-components"
import { Container, Header2, Header4 } from "atti-components"

const HomePageContainer = styled(Container)`
  ${Header2} {
    margin-bottom: ${({ theme }) => theme.spaces.s2};
    color: ${({ theme }) => theme.colors.primary};
  }
  ${Header4} {
    font-weight: ${({ theme }) => theme.fonts.fontWeight.fw600};
    margin-bottom: ${({ theme }) => theme.spaces.s0_5};
  }
`

export default HomePageContainer
