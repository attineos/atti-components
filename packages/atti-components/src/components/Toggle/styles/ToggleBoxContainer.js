import styled from 'styled-components'

import ToggleBox from './ToggleBox'
import HiddenInputToggle from './HiddenInputToggle'

const ToggleBoxContainer = styled.span`
  position: absolute;

  width: ${({ sized, theme }) => theme.components.toggle.sizes[sized].widthRectangle};
  height: ${({ sized, theme }) => theme.components.toggle.sizes[sized].heightRectangle};

  margin-top: ${({ sized, theme }) => theme.components.toggle.sizes[sized].margintop};

  background: ${({ variant, theme }) =>
    theme.components.toggle.colors[variant].backgroundRectangle};
  border-radius: ${({ sized, theme }) => theme.components.toggle.sizes[sized].borderRadius};

  @keyframes example1 {
    from {left: 0px;}
    to {left: ${({ position, theme }) => theme.components.toggle.sizes[position].changePos};}
  }
  @keyframes example2 {
    from {left: ${({ position, theme }) => theme.components.toggle.sizes[position].changePos};}
    to {left: 0px;}
  }

  ${HiddenInputToggle}:checked + ${ToggleBox} {
    
    animation-name: example1;
    animation-duration: 2s;
    left: ${({ position, theme }) => theme.components.toggle.sizes[position].changePos};

    &:after {
      display: inline-block;
      visibility: visible;
    }
  }


  ${HiddenInputToggle} + ${ToggleBox}{
    animation-name: example2;
    animation-duration: 2s;
  }

  ${HiddenInputToggle} {
    display: ${({ click, theme }) => theme.components.toggle.display[click].display};
    
  }
`

export default ToggleBoxContainer
