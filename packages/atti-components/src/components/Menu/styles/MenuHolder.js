import styled from 'styled-components'

import verticalMenu from './verticalMenu'

import { Item } from '../components'
import { Arrow, ItemsContainer } from '../components/ItemGroup/styles'

const MenuHolder = styled.div`
  ${({ isResponsive, isVertical, opened, theme }) => `
    height: ${theme.components.menu.spaces.height};
    background-color: ${theme.components.menu.colors.background};

    ${
      !isVertical
        ? `
      @media (min-width: ${theme.breakpoints.desktopMin}) {
        ${Arrow} {
          margin-left: 15px;
        }
        ${ItemsContainer} {
          position: absolute;
          top: ${theme.components.menu.spaces.height};
          left: 0;
          z-index: 3;
          background-color: ${theme.components.menu.colors.background};

          ${Item} {
            padding: 8px 24px;
          }
        }
      }
    `
        : ''
    }

    ${isVertical ? verticalMenu(theme) : ''}

    ${
      isResponsive
        ? `
      @media (max-width: ${theme.breakpoints.tabletMax}) {
        background-color: ${theme.components.menu.responsive.colors.background};
        transform: translateX(${opened ? '0' : '-110%'});
        transition: transform ${theme.animations.duration.d4} ease-in-out;
        ${verticalMenu(theme)};

        ${Item} {
          &:hover,
          &:focus,
          &.active {
            background-color: ${theme.components.menu.responsive.item.colors.backgroundHover};
          }
        }
      }
    `
        : ''
    }
  `}
`

export default MenuHolder
