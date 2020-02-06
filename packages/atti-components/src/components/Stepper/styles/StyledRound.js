import styled from 'styled-components'

const StyledRound = styled.div`
  width: ${({ theme }) => theme.components.stepper.sizes.round};
  height: ${({ theme }) => theme.components.stepper.sizes.round};
  box-shadow: ${({ isActivated, theme }) =>
    isActivated
      ? theme.components.stepper.boxShadows.shadow1
      : theme.components.stepper.boxShadows.shadow2};

  background-color: ${({ isActivated, theme }) =>
    isActivated ? theme.components.stepper.colors.stepAfter : theme.components.stepper.colors.step};
  border-radius: ${({ theme }) => theme.components.stepper.sizes.borderRadius};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
  }
`

export default StyledRound
