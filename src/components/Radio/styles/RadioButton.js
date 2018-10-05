import styled, { css } from 'styled-components'

const borders = css`
  border-radius: ${({ theme }) => theme.components.radio.radioButton.borders.radius};
  border: 2px solid ${({ theme }) => theme.colors.extraDarkSmoke};
`

const colors = css`
  color: ${({ theme }) => theme.components.radio.radioButton.colors.text};
`

const sizes = css`
  height: ${({ theme }) => theme.components.radio.radioButton.sizes.heights};
  width: ${({ theme }) => theme.components.radio.radioButton.sizes.widths};
`

const RadioButton = styled.span`
  ${borders};
  ${colors};
  ${sizes};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.components.radio.radioButton.spaces.marginRight};

  // Use of a circle in the radio when it's checked.
  &:after {
    content: ' ';
    display: none;
    width: calc(${({ theme }) => theme.components.radio.radioButton.sizes.widths} / 2);
    height: calc(${({ theme }) => theme.components.radio.radioButton.sizes.heights} / 2);
    background-color: ${({ theme }) => theme.components.radio.radioButton.colors.background};
    border-radius: ${({ theme }) => theme.components.radio.radioButton.borders.radius};
  }
`

export default RadioButton
