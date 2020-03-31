import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Text } from '../../Typographies'

const StyledLink = styled(Text.withComponent('a'))`
  color: ${({ theme }) => theme.components.link.colors.text};
  text-decoration: none;
  border-bottom: ${({ theme }) => theme.components.link.borders.width} solid
    ${({ theme }) => theme.components.link.colors.border};

  &:hover {
    color: ${({ theme }) => theme.components.link.colors.textHover};
    border-color: ${({ theme }) => theme.components.link.colors.borderHover};
  }

  &:visited {
    color: ${({ theme }) => theme.components.link.colors.textVisited};
  }
`

StyledLink.propTypes = {
  /**
   * Text of the link.
   */
  children: PropTypes.string.isRequired,
}

export default StyledLink
