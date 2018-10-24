import React from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'
import StyledAvatar from './styles/StyledAvatar'
import StyledPicturedAvatar from './styles/StyledPicturedAvatar'
import { abbrev_name } from '../../helpers/StringHelper/StringHelper'

/**
 * Avatar component
 *
 * @version 0.1
 * @author Adrien TINEL
 */

class Avatar extends React.Component {
  static defaultProps = {
    color: noop(),
    size: 'medium',
    src: noop(),
  }

  static propTypes = {
    /**
     * A deterministic color background
     */
    color: PropTypes.string,

    /**
     * Full name
     */
    name: PropTypes.string.isRequired,

    /**
     * Defines the size of the component
     */
    size: PropTypes.string,

    /**
     * Route to the background picture
     */
    src: PropTypes.string,
  }

  render() {
    const { name, size, src, color } = this.props

    // background of the avatar component
    let children
    if (src) {
      // pick the img route to define it as the background
      children = (
        <StyledPicturedAvatar
          alt={name}
          color={color}
          className="Avatar--img"
          size={size}
          src={src}
        />
      )
    } else {
      // initials as the background
      const abbr = abbrev_name(name)
      children = abbr
    }

    return (
      <StyledAvatar className="Avatar" size={size} name={name} color={color}>
        {children}
      </StyledAvatar>
    )
  }
}

export default Avatar
