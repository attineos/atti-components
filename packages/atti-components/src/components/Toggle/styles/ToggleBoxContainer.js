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

  @keyframes slideRight {
    from {left: 0px;}
    to {left: ${({ theme }) => theme.components.toggle.sizes.left};}
  }
  @keyframes slideLeft {
    from {left: ${({ theme }) => theme.components.toggle.sizes.left};}
    to {left: 0px;}
  }

  ${HiddenInputToggle}:checked + ${ToggleBox} {
    
    animation-name: slideRight;
    animation-duration: 0.75s;
    left: ${({ theme }) => theme.components.toggle.sizes.left};

    &:after {
      display: inline-block;
      visibility: visible;
    }
  }


  ${HiddenInputToggle} + ${ToggleBox}{
    animation-name: slideLeft;
    animation-duration: 0.75s;
    left: 0px;
  }

  ${HiddenInputToggle} {
    display: ${({ click, theme }) => theme.components.toggle.display[click].display};
    
  }
  
  
  
`
/* 
permet de modifier la cooleur de l'ellipse en fonction du click 
${HiddenInputToggle}:checked + ${ToggleBox} {
    background: green;
    
  }
  */

export default ToggleBoxContainer
