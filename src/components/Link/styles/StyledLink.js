import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import Text from '../../Text'

const colors = css`
  color: ${({ theme }) => theme.components.link.colors.text};
`

const StyledLink = styled(Text.withComponent('a'))`
  ${colors};
  text-decoration: none;
  border-bottom: 1px solid transparent;

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`

StyledLink.propTypes = {
  /**
   * Text of the link.
   */
  children: PropTypes.string.isRequired,
}

export default StyledLink
