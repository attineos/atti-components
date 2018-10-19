import styled from 'styled-components'

import CheckboxBox from './CheckboxBox'
import CheckboxBoxContainer from './CheckboxBoxContainer'
import HiddenInputCheckbox from './HiddenInputCheckbox'

import Label from '../../Label'

const LabelCheckbox = styled(Label)`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;

  // Modifications of the color background of the checkbox :
  &:hover ${CheckboxBoxContainer} ${HiddenInputCheckbox} + ${CheckboxBox} {
    background: ${({ theme }) => theme.components.checkbox.checkboxBox.colors.backgroundHover};
    border-color: ${({ theme }) => theme.components.checkbox.checkboxBox.colors.borderHover};
  }
`

export default LabelCheckbox
