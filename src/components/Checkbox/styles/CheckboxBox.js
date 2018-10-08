import styled, { css } from 'styled-components'

const sizes = css`
  height: ${({ theme }) => theme.components.checkbox.checkboxBox.sizes.height};
  width: ${({ theme }) => theme.components.checkbox.checkboxBox.sizes.width};
`

const CheckboxBox = styled.span`
  ${sizes};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.components.checkbox.checkboxBox.spaces.marginRight};
  border-radius: ${({ theme }) => theme.components.checkbox.checkboxBox.borders.radius};
  border: ${({ theme }) => theme.components.checkbox.checkboxBox.borders.width} solid
    ${({ theme }) => theme.components.checkbox.checkboxBox.colors.border};

  // Use of a letter V in the checkbox when it's checked.
  // The letter V is a rectangle whose left and bottom borders are filled. A rotation of 45 degrees is
  // applied, so this rectangle looks like a V.

  &:after {
    content: '';
    display: none;
    width: calc(${({ theme }) => theme.components.checkbox.checkboxBox.sizes.width} / 6);
    height: calc(${({ theme }) => theme.components.checkbox.checkboxBox.sizes.height} / 2);
    border: solid ${({ theme }) => theme.components.checkbox.checkboxBox.checkSign.color};
    border-width: 0 ${({ theme }) => theme.components.checkbox.checkboxBox.checkSign.thickness}
      ${({ theme }) => theme.components.checkbox.checkboxBox.checkSign.thickness} 0;
    transform: rotate(45deg);
  }
`

export default CheckboxBox
