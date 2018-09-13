import React from 'react'
import PropTypes from 'prop-types'
import StyledLink from './styles/StyledLink'

/**
 * A link, nothing special for the moment.
 *
 * @version 0.3
 * @author Joseph Lefevre
 * @author Thomas Capet
 * @author Victor Gosse
 */
const Link = ({ children, href, onClick, target }) => (
  <StyledLink href={href} onClick={onClick} target={target}>
    {children}
  </StyledLink>
)

Link.defaultProps = {
  onClick: null,
  target: null,
}

Link.propTypes = {
  /**
   * Text of the link.
   */
  children: PropTypes.string.isRequired,
  /**
   * The location of the external resource.
   */
  href: PropTypes.string.isRequired,

  /**
   * Where to open the link.
   */
  target: PropTypes.string,

  /**
   * Gets called when the user clicks on the link.
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   */
  onClick: PropTypes.func,
}

export default Link
