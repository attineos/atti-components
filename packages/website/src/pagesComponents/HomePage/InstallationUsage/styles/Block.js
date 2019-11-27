import styled from "styled-components"
import { BigText, Cell } from "atti-components"

const Block = styled(Cell)`
  border: 1px solid ${({ theme }) => theme.colors.lighterGrey};
  padding: ${({ theme }) => `${theme.spaces.s1_5} ${theme.spaces.s1}`};
  background-color: ${({ theme }) => theme.colors.white};
  margin-top: ${({ theme }) => theme.spaces.s3};

  ${BigText} {
    margin-bottom: ${({ theme }) => theme.spaces.s0_25};
  }
`

export default Block
