import styled from 'styled-components'

import ToggleBox from './ToggleBox'
import HiddenInputToggle from './HiddenInputToggle'

const ToggleBoxContainer = styled.span`
  position: relative;
  display: inline-block;

  width: ${({ variant, theme }) => theme.components.toggle.sizes[variant].widthRectangle};
  height: ${({ variant, theme }) => theme.components.toggle.sizes[variant].heightRectangle};

  margin-top: ${({ variant, theme }) => theme.components.toggle.sizes[variant].margintop};

  background-color: ${({ color, checked, theme }) =>
    checked
      ? theme.components.toggle.colors[color].backgroundRectangleAfter
      : theme.components.toggle.colors[color].backgroundRectangle};
  border-radius: ${({ variant, theme }) => theme.components.toggle.sizes[variant].borderRadius};

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
    animation-duration: 75ms;
    animation-timing-function: ease-in;
    left: ${({ theme }) => theme.components.toggle.sizes.left};

    &:after {
      display: inline-block;
      visibility: visible;
    }
  }


  ${HiddenInputToggle} + ${ToggleBox}{
    animation-name: slideLeft;
    animation-duration: 75ms;
    animation-timing-function: ease-in;
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
