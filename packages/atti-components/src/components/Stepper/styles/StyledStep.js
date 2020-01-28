import styled from 'styled-components'

const StyledStep = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  width: ${({ theme }) => theme.components.stepper.sizes.ellipse};
  height: ${({ theme }) => theme.components.stepper.sizes.ellipse};

  :hover {
    background-color: ${({ theme }) => theme.components.stepper.colors.grey};
  }
`

export default StyledStep
