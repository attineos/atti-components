import styled from 'styled-components'
import CheckboxBox from './CheckboxBox'
import HiddenInputCheckbox from './HiddenInputCheckbox'

const LabelCheckbox = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;

  // Modifications of the color background of the checkbox :
  &:hover ${HiddenInputCheckbox} + ${CheckboxBox} {
    background: ${({ theme }) => theme.components.checkbox.checkboxBox.colors.backgroundHover};
  }

  ${HiddenInputCheckbox}:checked + ${CheckboxBox} {
    background: ${({ theme }) => theme.components.checkbox.checkboxBox.colors.backgroundHover};
    &:after {
      display: block;
    }
  }
`

export default LabelCheckbox
