import styled, { css } from 'styled-components'

import verticalMenu from './verticalMenu'

import { ItemLink } from '../components/Item/styles'

const MenuHolder = styled.div`
  height: ${({ theme }) => theme.components.menu.spaces.height};
  background-color: ${({ theme }) => theme.components.menu.colors.background};

  /* VERTICAL MENU */
  ${({ isVertical }) => isVertical && verticalMenu}

  /* RESPONSIVE MENU */
  ${({ theme, isResponsive }) =>
    isResponsive &&
    css`
      @media (max-width: ${theme.breakpoints.tabletMax}) {
        background-color: ${({ theme }) => theme.components.menu.responsive.colors.background};
        transform: translateX(${({ opened }) => (opened ? '0' : '-110%')});
        transition: transform 0.3s ease-in-out;
        ${verticalMenu};

        ${ItemLink} {
          &:hover,
          &:focus,
          &.active {
            background-color: ${({ theme }) =>
              theme.components.menu.responsive.item.colors.backgroundHover};
          }
        }
      }
    `}
`

export default MenuHolder
