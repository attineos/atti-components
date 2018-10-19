import styled from 'styled-components'

import CheckboxBox from './CheckboxBox'
import HiddenInputCheckbox from './HiddenInputCheckbox'

const CheckboxBoxContainer = styled.span`
  position: relative;
  display: inline-block;
  margin-right: ${({ theme }) => theme.components.checkbox.checkboxBox.spaces.marginRight};
  line-height: ${({ theme }) => theme.components.checkbox.checkboxBox.sizes.height};
  height: ${({ theme }) => theme.components.checkbox.checkboxBox.sizes.height};
  width: ${({ theme }) => theme.components.checkbox.checkboxBox.sizes.width};

  ${HiddenInputCheckbox}:checked + ${CheckboxBox} {
    background: ${({ theme }) => theme.components.checkbox.checkboxBox.colors.backgroundChecked};
    border-color: ${({ theme }) => theme.components.checkbox.checkboxBox.colors.borderChecked};
    &:after {
      display: inline-block;
    }
  }

  &:hover ${CheckboxBox} {
    background: ${({ theme }) => theme.components.checkbox.checkboxBox.colors.backgroundHover};
    border-color: ${({ theme }) => theme.components.checkbox.checkboxBox.colors.borderHover};
  }
`

export default CheckboxBoxContainer
