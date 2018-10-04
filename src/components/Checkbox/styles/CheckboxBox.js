import styled, { css } from 'styled-components'

const colors = css`
  color: ${({ theme }) => theme.components.checkbox.checkboxBox.colors.text};
`

const sizes = css`
  height: ${({ theme }) => theme.components.checkbox.checkboxBox.sizes.heights};
  width: ${({ theme }) => theme.components.checkbox.checkboxBox.sizes.widths};
`

const CheckboxBox = styled.span`
  ${colors};
  ${sizes};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.components.checkbox.checkboxBox.spaces.marginRight};
  border-radius: 3px;
  border: 2px solid ${({ theme }) => theme.colors.extraDarkSmoke};

  // Use of a letter V in the checkbox when it's checked.
  // The letter V is a rectangle whose left and bottom borders are filled. A rotation of 45 degrees is
  // applied, so this rectangle looks like a V.

  &:after {
    content: '';
    display: none;
    width: calc(${({ theme }) => theme.components.checkbox.checkboxBox.sizes.widths} / 6);
    height: calc(${({ theme }) => theme.components.checkbox.checkboxBox.sizes.heights} / 2);
    border: solid ${({ theme }) => theme.colors.white};
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`

export default CheckboxBox
