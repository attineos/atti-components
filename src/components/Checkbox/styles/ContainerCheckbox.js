import styled from 'styled-components'
import FakeCheckbox from './FakeCheckbox'
import HiddenInputCheckbox from './HiddenInputCheckbox'

const ContainerCheckbox = styled.div`
  position: relative;
  height: auto;
  cursor: pointer;

  // Modifications of the color background of the checkbox :

  &:hover > ${HiddenInputCheckbox} ~ ${FakeCheckbox} {
    background: ${({ theme }) => theme.components.checkbox.colors.backgroundHover};
  }

  > ${HiddenInputCheckbox}:checked ~ ${FakeCheckbox} {
    background: ${({ theme }) => theme.components.checkbox.colors.backgroundHover};
    &:after {
      display: block;
    }
  }
`

export default ContainerCheckbox
