import styled from 'styled-components'

import MenuOpenerLine from './MenuOpenerLine'

const MenuOpenerContainer = styled.span`
  display: block;
  width: ${({ theme }) => theme.components.menu.menuMobile.opener.line.spaces.width};
  height: ${({ theme }) => theme.components.menu.menuMobile.opener.spaces.height};
  transform: translateX(
    ${({ opened, theme }) => (opened ? theme.components.menu.menuMobile.menu.spaces.width : '0')}
  );
  transition: transform 0.3s ease;
  cursor: pointer;

  ${MenuOpenerLine} {
    &:nth-child(1) {
      opacity: ${({ opened }) => (opened ? '0' : '1')};
    }

    &:nth-child(2) {
      margin-top: calc(
        ${({ theme }) =>
          `calc(${theme.components.menu.menuMobile.opener.spaces.height} / 2) - calc(${theme.components.menu.menuMobile.opener.line.spaces.height} / 2)`}
      );
      transform: ${({ opened }) => (opened ? 'rotate(45deg)' : 'rotate(0deg)')};
    }

    &:nth-child(3) {
      margin-top: calc(
        ${({ theme }) =>
          `calc(${theme.components.menu.menuMobile.opener.spaces.height} / 2) - calc(${theme.components.menu.menuMobile.opener.line.spaces.height} / 2)`}
      );
      transform: ${({ opened }) => (opened ? 'rotate(-45deg)' : 'rotate(0deg)')};
    }

    &:nth-child(4) {
      margin-top: calc(
        ${({ theme }) =>
          `${theme.components.menu.menuMobile.opener.spaces.height} - ${theme.components.menu.menuMobile.opener.line.spaces.height}`}
      );
      opacity: ${({ opened }) => (opened ? '0' : '1')};
    }
  }
`

export default MenuOpenerContainer
