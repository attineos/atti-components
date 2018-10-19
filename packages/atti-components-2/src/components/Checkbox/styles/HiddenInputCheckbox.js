import styled from 'styled-components'

import CheckboxBox from './CheckboxBox'

const HiddenInputCheckbox = styled.input`
  position: absolute;
  top: 0;
  left: 0;

  opacity: 0;
  cursor: pointer;
  margin: 0;
  z-index: 2;
  width: 100%;
  height: 100%;

  &:hover + ${CheckboxBox} {
    background: ${({ theme }) => theme.components.checkbox.checkboxBox.colors.backgroundHover};
    border-color: ${({ theme }) => theme.components.checkbox.checkboxBox.colors.borderHover};
  }
`

export default HiddenInputCheckbox
