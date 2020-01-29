import styled from 'styled-components'

const StyledStep = styled.div`
  position: relative;
  display: inline-block;
  text-align: center;
  width: ${({ theme }) => theme.components.stepper.sizes.ellipse};
  height: ${({ theme }) => theme.components.stepper.sizes.ellipse};
  background-color: white;

  :not(:last-child) {
    margin-right: 100px;
  }

  :not(:last-child):after {
    position: absolute;
    content: '';
    right: -200%;
    top: 0%;
    width: 200%;
    height: 50%;
    border-bottom: 2px solid grey;
  }
`

export default StyledStep
