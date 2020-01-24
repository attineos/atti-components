// @noSnapshot
import styled, { css } from 'styled-components'

import { resetCSS } from 'helpers'

const backgroundImage = ({ bgSrc }) =>
  bgSrc
    ? css`
    background-image: url('${bgSrc}');
    background-size: 'cover';
  `
    : ''

const borders = css`
  border-radius: ${({ theme }) => theme.components.avatar.border.radius};
`

const colors = css`
  color: ${({ theme }) => theme.components.avatar.colors.text};
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor] || bgColor};
`
const fonts = css`
  font-family: ${({ theme }) => theme.components.avatar.fonts.fontFamily};
  font-size: ${({ size, theme }) => theme.components.avatar.sizes[size].fontSize};
  line-height: ${({ size, theme }) => theme.components.avatar.sizes[size].lineHeight};
`

const sizes = css`
  width: ${({ size, theme }) => theme.components.avatar.sizes[size].size};
  height: ${({ size, theme }) => theme.components.avatar.sizes[size].size};
`

const StyledAvatar = styled('p')`
  ${resetCSS};
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ bgSrc }) => backgroundImage({ bgSrc })};
  ${borders};
  ${colors};
  ${fonts};
  ${sizes};
`

export default StyledAvatar
