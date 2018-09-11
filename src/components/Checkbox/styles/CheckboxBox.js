import styled, { css } from 'styled-components'

const colors = css`
  background: ${({ theme }) => theme.components.checkbox.checkboxBox.colors.background};
  color: ${({ theme }) => theme.components.checkbox.checkboxBox.colors.text};
`

const sizes = css`
  height: ${({ theme }) => theme.components.checkbox.checkboxBox.sizes.heights};
  width: ${({ theme }) => theme.components.checkbox.checkboxBox.sizes.widths};
`

const CheckboxBox = styled.span`
  ${colors};
  ${sizes};
  display: inline-block;
  margin-right: ${({ theme }) => theme.components.checkbox.checkboxBox.spaces.marginRight};

  // Use of a letter V in the checkbox when it's checked.
  // The letter V is a rectangle whose left and bottom borders are filled. A rotation of 45 degrees is
  // applied, so this rectangle looks like a V.

  &:after {
    content: '';
    position: absolute;
    display: none;
    left: calc(${({ theme }) => theme.components.checkbox.checkboxBox.sizes.widths} / 3);
    top: calc(${({ theme }) => theme.components.checkbox.checkboxBox.sizes.heights} / 6);
    width: calc(${({ theme }) => theme.components.checkbox.checkboxBox.sizes.widths} / 6);
    height: calc(${({ theme }) => theme.components.checkbox.checkboxBox.sizes.heights} / 3);
    border: solid ${({ theme }) => theme.components.checkbox.checkboxBox.colors.background};
    border-width: 0 ${({ theme }) => theme.components.checkbox.checkboxBox.sizes.widthCheckSign}
      ${({ theme }) => theme.components.checkbox.checkboxBox.sizes.widthCheckSign} 0;
    transform: rotate(45deg);
  }
`

export default CheckboxBox
