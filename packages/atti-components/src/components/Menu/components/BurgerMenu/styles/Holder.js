import styled from 'styled-components'

import Line from './Line'

const Holder = styled.div`
  display: none;
  width: ${({ theme }) => theme.components.menu.burgerMenu.spaces.width};
  height: ${({ theme }) => theme.components.menu.burgerMenu.spaces.height};
  transform: translateX(
    ${({ opened, theme }) => (opened ? theme.components.menuOld.menuMobile.menu.spaces.width : '0')}
  );
  transition: transform 0.3s ease;
  cursor: pointer;

  ${Line} {
    &:nth-child(1) {
      opacity: ${({ opened }) => (opened ? '0' : '1')};
    }

    &:nth-child(2) {
      margin-top: calc(
        ${({ theme }) =>
          `calc(${theme.components.menu.burgerMenu.spaces.height} / 2) - calc(${theme.components.menu.burgerMenu.line.spaces.height} / 2)`}
      );
      transform: ${({ opened }) => (opened ? 'rotate(45deg)' : 'rotate(0deg)')};
    }

    &:nth-child(3) {
      margin-top: calc(
        ${({ theme }) =>
          `calc(${theme.components.menu.burgerMenu.spaces.height} / 2) - calc(${theme.components.menu.burgerMenu.line.spaces.height} / 2)`}
      );
      transform: ${({ opened }) => (opened ? 'rotate(-45deg)' : 'rotate(0deg)')};
    }

    &:nth-child(4) {
      margin-top: calc(
        ${({ theme }) =>
          `${theme.components.menu.burgerMenu.spaces.height} - ${theme.components.menu.burgerMenu.line.spaces.height}`}
      );
      opacity: ${({ opened }) => (opened ? '0' : '1')};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
    display: block;
  }
`

export default Holder
