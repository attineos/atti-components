import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { Text } from '../../Typographies'

const colors = css`
  color: ${({ theme }) => theme.components.link.colors.text};
`

const StyledLink = styled(Text.withComponent('a'))`
  ${colors};
  text-decoration: none;
  border-bottom: ${({ theme }) => theme.components.link.borders.width} solid
    ${({ theme }) => theme.components.link.colors.border};

  &:hover {
    border-color: ${({ theme }) => theme.components.link.colors.borderHover};
  }
`

StyledLink.propTypes = {
  /**
   * Text of the link.
   */
  children: PropTypes.string.isRequired,
}

export default StyledLink
