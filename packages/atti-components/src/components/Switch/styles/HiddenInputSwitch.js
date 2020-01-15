import styled from 'styled-components'

import SwitchBox from './SwitchBox'

const HiddenInputSwitch = styled.input`
  position: absolute;
  top: 0;
  left: 0;

  opacity: 0;
  cursor: pointer;
  margin: 0;
  z-index: 2;

  width: 25px;
  height: 25px;
  background: #f39c12;
  border-radius: 50px;
  cursor: pointer;

  &:hover + ${SwitchBox} {
    background: ${({ theme }) => theme.components.checkBox.checkBoxBox.colors.backgroundHover};
    border-color: ${({ theme }) => theme.components.checkBox.checkBoxBox.colors.borderHover};
  }
`

export default HiddenInputSwitch
