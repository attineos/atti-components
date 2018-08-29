import React from 'react'
import PropTypes from 'prop-types'

import StyledLink from './styles/StyledLink'

/**
 * A link, nothing special for the moment.
 *
 * @version 0.2
 * @author Victor Gosse
 * @author Thomas Capet
 */
const Link = ({ href, onClick }) => (
  <StyledLink href={href} onClick={onClick}>
    This is a link
  </StyledLink>
)

Link.defaultProps = {
  onClick: null,
}

Link.propTypes = {
  /**
   * The location of the external resource.
   */
  href: PropTypes.string.isRequired,
  /**
   * Gets called when the user clicks on the link.
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   */
  onClick: PropTypes.func,
}

export default Link
