// @noSnapshot
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import StyledAvatar from './styles/StyledAvatar'

/**
 * Avatar component
 *
 */
const Avatar = ({ bgColor, bgSrc, children, className, size, title }) => (
  <StyledAvatar
    as={children ? 'p' : 'div'}
    bgColor={bgColor}
    bgSrc={bgSrc}
    className={className}
    size={size}
    title={title}
  >
    {children}
  </StyledAvatar>
)

Avatar.defaultProps = {
  bgColor: '',
  bgSrc: '',
  children: '',
  className: '',
  size: 'medium',
  title: '',
}

Avatar.propTypes = {
  /**
   * The background color of the Avatar. Can be a color value or a color's name from the theme.
   */
  bgColor: PropTypes.string,
  /**
   * Route to the background's picture.
   */
  bgSrc: PropTypes.string,
  /**
   * Content text of the Avatar.
   */
  children: PropTypes.string,
  /**
   * The classes of the Avatar.
   */
  className: PropTypes.string,
  /**
   * Defines the size of the component.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Title of the Avatar (useful for accessibility when setting a background image).
   */
  title: PropTypes.string,
}

export default styled(React.memo(Avatar))``
