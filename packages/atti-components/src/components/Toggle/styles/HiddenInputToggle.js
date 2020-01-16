import styled from 'styled-components'

import ToggleBox from './ToggleBox'

const HiddenInputToggle = styled.input`
  position: absolute;
  top: 0;
  left: 0;

  opacity: 0;
  cursor: pointer;
  margin: 0;
  z-index: 2;

  width: ${({ theme }) => theme.components.toggle.sizes.widthEllipse};
  height: ${({ theme }) => theme.components.toggle.sizes.height};
  background: ${({ theme }) => theme.components.toggle.colors.backgroundEllipse};
  border-radius: 50px;

  &:hover + ${ToggleBox} {
    background: ${({ theme }) => theme.components.toggle.colors.backgroundEllipse};
    border-color: ${({ theme }) => theme.components.toggle.colors.backgroundEllipse};
  }
`

export default HiddenInputToggle
