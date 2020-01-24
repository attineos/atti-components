import styled from 'styled-components'
import { Text, Header3 } from '../../Typographies'

const StyledEllipse = styled.div`
  position: absolute;

  width: ${({ theme }) => theme.components.stepper.sizes.ellipse};
  height: ${({ theme }) => theme.components.stepper.sizes.ellipse};

  background-color: ${({ theme }) => theme.components.stepper.colors.bulle};
  border-radius: ${({ theme }) => theme.components.stepper.sizes.borderRadius};

  > ${Header3} {
    margin-top: ${({ theme }) => theme.components.stepper.sizes.marginTopH3};
    text-align: center;
    color: white;
  }

  > ${Text} {
    margin-top: ${({ theme }) => theme.components.stepper.sizes.marginTopT};
    text-align: center;
  }
`

export default StyledEllipse
