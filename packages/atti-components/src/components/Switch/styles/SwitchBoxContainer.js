import styled from 'styled-components'

import getSpacesAsCss from 'helpers/generators/getSpacesAsCSS'
import SwitchBox from './SwitchBox'
import HiddenInputSwitch from './HiddenInputSwitch'

const SwitchBoxContainer = styled.span`
  position: absolute;

  width: 50px;
  height: 25px;
  background: rgba(243, 156, 18, 0.6);
  border-radius: 50px;

  margin: ${({ theme }) => getSpacesAsCss(theme.components.checkBox.checkBoxBox.spaces)};

  ${HiddenInputSwitch}:checked + ${SwitchBox} {
    background: ${({ theme }) => theme.components.checkBox.checkBoxBox.colors.backgroundChecked};
    left: 25px;
    &:after {
      display: inline-block;
      visibility: visible;
    }
  }

  &:hover ${SwitchBox} {
    background: ${({ theme }) => theme.components.checkBox.checkBoxBox.colors.backgroundHover};
    border-color: ${({ theme }) => theme.components.checkBox.checkBoxBox.colors.borderHover};
  }
`
/*

line-height: ${({ theme }) => theme.components.checkBox.checkBoxBox.sizes.height};
  height: ${({ theme }) => theme.components.checkBox.checkBoxBox.sizes.height};
  width: ${({ theme }) => theme.components.checkBox.checkBoxBox.sizes.width};
*/

export default SwitchBoxContainer
