import styled from 'styled-components'

import ToggleBox from './ToggleBox'
import HiddenInputToggle from './HiddenInputToggle'

const ToggleBoxContainer = styled.span`
  position: relative;
  display: inline-block;

  width: ${({ sized, theme }) => theme.components.toggle.sizes[sized].widthRectangle};
  height: ${({ sized, theme }) => theme.components.toggle.sizes[sized].heightRectangle};

  margin-top: ${({ sized, theme }) => theme.components.toggle.sizes[sized].margintop};

  background-color: ${({ variant, checked, theme }) =>
    checked
      ? theme.components.toggle.colors[variant].backgroundRectangleAfter
      : theme.components.toggle.colors[variant].backgroundRectangle};
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
    animation-duration: 75ms;
    animation-timing-function: ease-in;
    left: ${({ theme }) => theme.components.toggle.sizes.left};
    background-color:  ${({ variant, theme }) =>
      theme.components.toggle.colors[variant].backgroundEllipseAfter};
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);

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

export default ToggleBoxContainer
