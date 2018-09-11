import styled from 'styled-components'
import RadioButton from './RadioButton'
import HiddenInputRadio from './HiddenInputRadio'

const LabelRadio = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;

  // Modifications of the color background of the radio :
  &:hover ${HiddenInputRadio} + ${RadioButton} {
    background: ${({ theme }) => theme.components.radio.radioButton.colors.backgroundHover};
  }

  ${HiddenInputRadio}:checked + ${RadioButton} {
    background: ${({ theme }) => theme.components.radio.radioButton.colors.backgroundHover};
    &:after {
      display: block;
    }
  }
`

export default LabelRadio
