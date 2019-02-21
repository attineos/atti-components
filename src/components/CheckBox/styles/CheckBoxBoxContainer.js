import styled from 'styled-components'

import CheckBoxBox from './CheckBoxBox'
import HiddenInputCheckBox from './HiddenInputCheckBox'

const CheckBoxBoxContainer = styled.span`
  position: relative;
  display: inline-block;

  margin: ${({ theme }) => `
    ${theme.components.checkBox.checkBoxBox.spaces.top}
    ${theme.components.checkBox.checkBoxBox.spaces.right}
    ${theme.components.checkBox.checkBoxBox.spaces.bottom}
    ${theme.components.checkBox.checkBoxBox.spaces.left}
  `};

  line-height: ${({ theme }) => theme.components.checkBox.checkBoxBox.sizes.height};
  height: ${({ theme }) => theme.components.checkBox.checkBoxBox.sizes.height};
  width: ${({ theme }) => theme.components.checkBox.checkBoxBox.sizes.width};

  ${HiddenInputCheckBox}:checked + ${CheckBoxBox} {
    background: ${({ theme }) => theme.components.checkBox.checkBoxBox.colors.backgroundChecked};
    border-color: ${({ theme }) => theme.components.checkBox.checkBoxBox.colors.borderChecked};
    &:after {
      display: inline-block;
      visibility: visible;
    }
  }

  &:hover ${CheckBoxBox} {
    background: ${({ theme }) => theme.components.checkBox.checkBoxBox.colors.backgroundHover};
    border-color: ${({ theme }) => theme.components.checkBox.checkBoxBox.colors.borderHover};
  }
`

export default CheckBoxBoxContainer
