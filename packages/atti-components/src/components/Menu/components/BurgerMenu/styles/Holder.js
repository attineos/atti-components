import styled from 'styled-components'

import Line from './Line'

const Holder = styled.div`
  display: none;
  cursor: pointer;
  ${({ opened, theme }) => `
    width: ${theme.components.menu.burgerMenu.spaces.width};
    height: ${theme.components.menu.burgerMenu.spaces.height};
    transform: translateX(${opened ? theme.components.menu.vertical.spaces.width : '0'});
    transition: transform ${theme.animations.duration.d4} ease;

    ${Line} {
      &:nth-child(1) {
        opacity: ${opened ? '0' : '1'};
      }

      &:nth-child(2) {
        margin-top: calc(calc(${theme.components.menu.burgerMenu.spaces.height} / 2) - calc(${
    theme.components.menu.burgerMenu.line.spaces.height
  } / 2));
        transform: ${opened ? 'rotate(45deg)' : 'rotate(0deg)'};
      }

      &:nth-child(3) {
        margin-top: calc(calc(${theme.components.menu.burgerMenu.spaces.height} / 2) - calc(${
    theme.components.menu.burgerMenu.line.spaces.height
  } / 2));
        transform: ${opened ? 'rotate(-45deg)' : 'rotate(0deg)'};
      }

      &:nth-child(4) {
        margin-top: calc(${theme.components.menu.burgerMenu.spaces.height} - ${
    theme.components.menu.burgerMenu.line.spaces.height
  });
        opacity: ${opened ? '0' : '1'};
      }
    }

    @media (max-width: ${theme.breakpoints.tabletMax}) {
      display: block;
    }
  `}
`

export default Holder
