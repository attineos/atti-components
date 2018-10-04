import styled from 'styled-components'

const StyledInput = styled.input`
  color: ${({ theme }) => theme.colors.steel};
  caret-color: ${({ theme }) => theme.colors.steel};
  background-color: ${({ theme }) => theme.components.input.input.colors.background};

  height: 36px;
  padding: 0 10px;
  border: 2px solid ${({ theme }) => theme.colors.extraDarkSmoke};
  border-radius: 3px;

  font-size: 16px;
  font-family: Roboto;

  ::placeholder {
    color: ${({ theme }) => theme.colors.extraDarkSmoke};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0px 0px 2px 0px ${({ theme }) => theme.colors.secondary};
  }
`

export default StyledInput
