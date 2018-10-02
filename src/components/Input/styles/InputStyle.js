import styled from 'styled-components'

const StyledInput = styled.input`
  color: ${({ theme }) => theme.components.input.input.colors.text};
  background-color: ${({ theme }) => theme.components.input.input.colors.background};
`

export default StyledInput
