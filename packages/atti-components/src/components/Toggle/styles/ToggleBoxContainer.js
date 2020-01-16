import styled from 'styled-components'

import ToggleBox from './ToggleBox'
import HiddenInputToggle from './HiddenInputToggle'

const ToggleBoxContainer = styled.span`
  position: absolute;

  width: ${({ theme }) => theme.components.toggle.sizes.widthRectangle};
  height: ${({ theme }) => theme.components.toggle.sizes.height};

  background: ${({ variant, theme }) =>
    theme.components.toggle.colors[variant].backgroundRectangle};
  border-radius: ${({ theme }) => theme.components.toggle.sizes.borderRadius};

  ${HiddenInputToggle}:checked + ${ToggleBox} {
    left: ${({ position, theme }) => theme.components.toggle.sizes[position].changePos};

    &:after {
      display: inline-block;
      visibility: visible;
    }
  }

  ${HiddenInputToggle} {
    display: ${({ display, theme }) => theme.components.toggle.display[display].display};
  }
`

/*
Désactive le clique
${HiddenInputToggle}{
  display : none;   
}
*/
export default ToggleBoxContainer
