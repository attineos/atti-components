import styled, { css } from 'styled-components'

const borders = css`
  border-radius: ${({ theme }) => theme.components.checkBox.checkBoxBox.borders.radius};
  border: ${({ theme }) => theme.components.checkBox.checkBoxBox.borders.width} solid
    ${({ theme }) => theme.components.checkBox.checkBoxBox.colors.border};
`

const sizes = css`
  height: ${({ theme }) => theme.components.checkBox.checkBoxBox.sizes.height};
  width: ${({ theme }) => theme.components.checkBox.checkBoxBox.sizes.width};
`

const CheckBoxBox = styled.span`
  ${borders};
  ${sizes};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  // Use of a letter V in the checkBox when it's checked.
  // The letter V is a rectangle whose left and bottom borders are filled. A rotation of 45 degrees is
  // applied, so this rectangle looks like a V.

  &:after {
    content: '';
    display: inline-block;
    visibility: hidden;
    width: calc(${({ theme }) => theme.components.checkBox.checkBoxBox.sizes.width} / 6);
    height: calc(${({ theme }) => theme.components.checkBox.checkBoxBox.sizes.height} / 2);
    border: solid ${({ theme }) => theme.components.checkBox.checkBoxBox.checkSign.color};
    border-width: 0 ${({ theme }) => theme.components.checkBox.checkBoxBox.checkSign.thickness}
      ${({ theme }) => theme.components.checkBox.checkBoxBox.checkSign.thickness} 0;
    transform: rotate(45deg);
  }
`

export default CheckBoxBox
