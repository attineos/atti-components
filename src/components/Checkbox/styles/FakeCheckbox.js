import styled, { css } from 'styled-components'

const border = css`
  border-width: ${({ theme }) => theme.components.checkbox.border.outterBorder};
`

const colors = css`
  background: ${({ theme }) => theme.components.checkbox.colors.background};
  color: ${({ theme }) => theme.components.checkbox.colors.text};
`

const sizes = css`
  height: ${({ theme }) => theme.components.checkbox.sizes.heights};
  width: ${({ theme }) => theme.components.checkbox.sizes.widths};
`

const FakeCheckbox = styled.span`
  ${border};
  ${colors};
  ${sizes};
  display: inline-block;

  // Use of a letter V in the checkbox when it's checked.
  // The letter V is a rectangle whose left and bottom borders are filled. A rotation of 45 degrees is
  // applied, so this rectangle looks like a V.

  &:after {
    content: '';
    position: absolute;
    display: none;
    left: calc(${({ theme }) => theme.components.checkbox.sizes.widths} / 3);
    top: calc(${({ theme }) => theme.components.checkbox.sizes.heights} / 6);
    width: calc(${({ theme }) => theme.components.checkbox.sizes.widths} / 6);
    height: calc(${({ theme }) => theme.components.checkbox.sizes.heights} / 3);
    border: solid ${({ theme }) => theme.components.checkbox.colors.background};
    border-width: 0 ${({ theme }) => theme.components.checkbox.sizes.widthCheckSign}
      ${({ theme }) => theme.components.checkbox.sizes.widthCheckSign} 0;
    transform: rotate(45deg);
  }
`

export default FakeCheckbox
