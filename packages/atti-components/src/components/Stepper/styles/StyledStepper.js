import styled from 'styled-components'

const StyledStepper = styled.ol`
  display: flex;
  padding: 0;
  list-style: none;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
  }
`

export default StyledStepper
