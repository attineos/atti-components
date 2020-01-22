import styled from 'styled-components'

const StyledEllipse = styled.div`

  position: absolute;

  width: 150px;
  height: 5px;
  margin-top:20px;
  margin-left: 42px

  background-color: ${({ theme }) => theme.components.stepper.colors.background}; ;
  border-radius: 50px;


`

export default StyledEllipse
