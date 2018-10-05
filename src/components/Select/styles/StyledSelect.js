import styled, { css } from 'styled-components'

const colors = css`
  color: ${({ theme }) => theme.components.select.select.colors.text};
  background-image: linear-gradient(
      45deg,
      transparent 50%,
      ${({ theme }) => theme.colors.white} 50%
    ),
    linear-gradient(135deg, ${({ theme }) => theme.colors.white} 50%, transparent 50%),
    linear-gradient(
      to right,
      ${({ theme }) => theme.colors.white},
      ${({ theme }) => theme.colors.white}
    );
  background-position: calc(100% - 17px) calc(1em + 2px), calc(100% - 12px) calc(1em + 2px),
    calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.components.select.select.colors.background};
`

const fonts = css`
  font-size: ${({ theme }) => theme.components.select.select.fonts.fontSize};
  font-weight: ${({ theme }) => theme.components.select.select.fonts.fontWeight};
  font-family: ${({ theme }) => theme.components.select.select.fonts.fontFamily};
`

const StyledSelect = styled.select`
  ${colors};
  ${fonts};
  border: ${({ theme }) => theme.components.select.select.borders.width} solid
    ${({ theme }) => theme.components.select.select.borders.color};
  border-radius: 3px;
  margin-bottom: ${({ theme }) => theme.components.select.select.spaces.marginBottom};

  height: 36px;
  padding: 0.5em 3.5em 0.5em 1em;
  position: relative;
  appearance: none;

  &::-ms-expand {
    display: none;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0px 0px 2px 0px ${({ theme }) => theme.colors.secondary};
  }
`

export default StyledSelect
