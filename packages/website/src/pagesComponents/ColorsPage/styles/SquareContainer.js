import styled from "styled-components"
import Square from "./Square"

const SquareContainer = styled("div")`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spaces.s2};
  > ${Square}:not(:last-child) {
    margin-right: ${({ theme }) => theme.spaces.s1};
  }
`

export default SquareContainer
