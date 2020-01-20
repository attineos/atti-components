import styled from "styled-components"
import { Text as P } from "atti-components"

const Text = styled(P)`
  margin-bottom: ${({ theme }) => theme.spaces.s0_5};
  margin-top: ${({ theme }) => theme.spaces.s0_5};
`

export default Text
