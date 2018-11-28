import styled from 'styled-components'

import CheckBoxBox from './CheckBoxBox'

const HiddenInputCheckBox = styled.input`
  position: absolute;
  top: 0;
  left: 0;

  opacity: 0;
  cursor: pointer;
  margin: 0;
  z-index: 2;
  width: 100%;
  height: 100%;

  &:hover + ${CheckBoxBox} {
    background: ${({ theme }) => theme.components.checkBox.checkBoxBox.colors.backgroundHover};
    border-color: ${({ theme }) => theme.components.checkBox.checkBoxBox.colors.borderHover};
  }
`

export default HiddenInputCheckBox
