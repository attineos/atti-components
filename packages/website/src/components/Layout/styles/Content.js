import styled from "styled-components"

const Content = styled("div")`
  flex-grow: 1;
  padding-top: ${({ theme }) => theme.spaces.s4};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export default Content
