import styled from 'styled-components'
import Text from '../../Text'

const StyledLink = styled(Text.withComponent('a'))`
  color: ${({ theme }) => theme.components.link.colors.text};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export default StyledLink
