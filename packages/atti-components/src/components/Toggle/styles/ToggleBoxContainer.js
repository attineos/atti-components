import styled from 'styled-components'

import ToggleBox from './ToggleBox'
import HiddenInputToggle from './HiddenInputToggle'

const ToggleBoxContainer = styled.span`
  position: absolute;

  width: ${({ theme }) => theme.components.toggle.sizes.widthRectangle};
  height: ${({ theme }) => theme.components.toggle.sizes.height};
  background: ${({ theme }) => theme.components.toggle.colors.backgroundRectangle};
  border-radius: ${({ theme }) => theme.components.toggle.sizes.borderRadius};

  ${HiddenInputToggle}:checked + ${ToggleBox} {
    background: ${({ theme }) => theme.components.toggle.colors.backgroundEllipse};
    left: ${({ theme }) => theme.components.toggle.sizes.left};
    &:after {
      display: inline-block;
      visibility: visible;
    }
  }

  &:hover ${ToggleBox} {
    background: ${({ theme }) => theme.components.toggle.colors.backgroundEllipse};
  }
`

export default ToggleBoxContainer
