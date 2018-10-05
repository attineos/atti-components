import styled, { css } from 'styled-components'

const borders = css`
  border: ${({ theme }) => theme.components.input.input.borders.width} solid
    ${({ theme }) => theme.components.input.input.colors.border};
  border-radius: ${({ theme }) => theme.components.input.input.borders.radius};
`

const colors = css`
  color: ${({ theme }) => theme.components.input.input.colors.text};
  caret-color: ${({ theme }) => theme.components.input.input.colors.caret};
  background-color: ${({ theme }) => theme.components.input.input.colors.background};
`

const forms = css`
  min-height: ${({ theme }) => theme.components.input.input.forms.minHeight};
`

const StyledInput = styled.input`
  ${borders};
  ${colors};
  ${forms};

  padding: 0 10px;

  font-size: 16px;
  font-family: Roboto;

  ::placeholder {
    color: ${({ theme }) => theme.components.input.input.colors.placeholder};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0px 0px 2px 0px ${({ theme }) => theme.colors.secondary};
  }
`

export default StyledInput
