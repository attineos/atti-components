import styled from 'styled-components'

const LinkStyle = styled.a`
  color: ${({ theme }) => theme.components.link.colors.text};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export default LinkStyle
