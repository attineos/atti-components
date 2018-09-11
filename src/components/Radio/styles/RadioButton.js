import styled, { css } from 'styled-components'

const border = css`
  border-radius: ${({ theme }) => theme.components.radio.radioButton.border.radius};
`

const colors = css`
  background: ${({ theme }) => theme.components.radio.radioButton.colors.background};
  color: ${({ theme }) => theme.components.radio.radioButton.colors.text};
`

const sizes = css`
  height: ${({ theme }) => theme.components.radio.radioButton.sizes.heights};
  width: ${({ theme }) => theme.components.radio.radioButton.sizes.widths};
`

const RadioButton = styled.span`
  ${border};
  ${colors};
  ${sizes};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.components.radio.radioButton.spaces.marginRight};

  // Use of a circle in the radio when it's checked.
  &:after {
    content: '';
    display: none;
    width: calc(${({ theme }) => theme.components.radio.radioButton.sizes.widths} / 2);
    height: calc(${({ theme }) => theme.components.radio.radioButton.sizes.heights} / 2);
    background-color: ${({ theme }) => theme.components.radio.radioButton.colors.background};
    border-radius: ${({ theme }) => theme.components.radio.radioButton.border.radius};
  }
`

export default RadioButton
