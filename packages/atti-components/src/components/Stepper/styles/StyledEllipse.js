import styled from 'styled-components'

import Text from '../../Typographies'

const StyledEllipse = styled.span`
  position: absolute;

  width: 40px;
  height: 40px;

  background-color: ${({ theme }) => theme.components.stepper.colors.bulle};
  border-radius: 50px;

  > ${Text} {
    width: auto;
  }
`

export default StyledEllipse
