import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import StyledLink from './styles/StyledLink'

/**
 * A link to an action or another resource.
 */
const Link = ({ children, className, href, onClick, target }) => (
  <StyledLink className={className} href={href} onClick={onClick} target={target}>
    {children}
  </StyledLink>
)

Link.defaultProps = {
  className: '',
  onClick: null,
  target: null,
}

Link.propTypes = {
  /**
   * Text of the link.
   */
  children: PropTypes.string.isRequired,
  /**
   * The classes used on the component.
   */
  className: PropTypes.string,
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

/** @component */
export default styled(React.memo(Link))``
