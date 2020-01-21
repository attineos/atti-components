import styled from "styled-components"
import { SmallText } from "atti-components"

const Square = styled(SmallText)`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  height: 140px;
  width: 140px;
  padding: ${({ theme }) => theme.spaces.s0_5};
  background-color: ${({ background, theme }) => theme.colors[background]};
  color: ${({ color, theme }) => theme.colors[color]};
`

export default Square
