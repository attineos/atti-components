import styled from 'styled-components'

const ItemLink = styled.a`
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.components.menu.item.colors.text};
  padding: ${({ theme }) => theme.components.menu.item.spaces.padding};
  font-family: ${({ theme }) => theme.components.menu.item.fonts.fontFamily};
  font-size: ${({ theme }) => theme.components.menu.item.fonts.fontSize};
  font-weight: ${({ theme }) => theme.components.menu.item.fonts.fontWeight};
  line-height: ${({ theme }) => theme.components.menu.item.fonts.lineHeight};
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;

  &:hover,
  &:focus,
  &.active {
    background-color: ${({ theme }) => theme.components.menu.item.colors.backgroundHover};
  }
`

export default ItemLink
