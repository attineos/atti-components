import styled from 'styled-components'

const StyledRound = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ theme }) => theme.components.stepper.sizes.round};
  height: ${({ theme }) => theme.components.stepper.sizes.round};

  background-color: ${({ isCompleted, theme }) =>
    isCompleted ? theme.components.stepper.colors.stepAfter : theme.components.stepper.colors.step};
  border-radius: ${({ theme }) => theme.components.stepper.sizes.borderRadius};
  box-shadow: ${({ isCompleted, theme }) =>
    isCompleted
      ? theme.components.stepper.boxShadows.shadow1
      : theme.components.stepper.boxShadows.shadow2};
`

export default StyledRound
