import styled, { css } from 'styled-components'

const borders = css`
  border-radius: ${({ theme }) => theme.components.radio.radioButton.borders.radius};
  border: ${({ theme }) => theme.components.radio.radioButton.borders.width} solid
    ${({ theme }) => theme.colors.extraDarkSmoke};
`

const sizes = css`
  height: ${({ theme }) => theme.components.radio.radioButton.sizes.heights};
  width: ${({ theme }) => theme.components.radio.radioButton.sizes.widths};
`

const RadioButton = styled.span`
  ${borders};
  ${sizes};
  display: flex;
  align-items: center;
  justify-content: center;

  // Use of a circle in the radio when it's checked.
  &:after {
    content: ' ';
    display: block;
    visibility: hidden;
    background-color: ${({ theme }) => theme.components.radio.radioButton.colors.backgroundChecked};
    width: calc(${({ theme }) => theme.components.radio.radioButton.sizes.widths} / 2);
    height: calc(${({ theme }) => theme.components.radio.radioButton.sizes.heights} / 2);
    border-radius: ${({ theme }) => theme.components.radio.radioButton.borders.radius};
  }
`

export default RadioButton
