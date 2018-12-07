import styled from 'styled-components'
import RadioButton from './RadioButton'
import HiddenInputRadio from './HiddenInputRadio'

const RadioContainer = styled('div')`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;

  // Modifications of the color background of the radio :
  &:hover ${HiddenInputRadio} + ${RadioButton} {
    &:after {
      visibility: visible;
      background-color: ${({ theme }) => theme.components.radio.radioButton.colors.backgroundHover};
    }
  }

  ${HiddenInputRadio}:checked + ${RadioButton} {
    &:after {
      visibility: visible;
    }
  }
`

export default RadioContainer
