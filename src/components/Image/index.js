import React from 'react'
import PropTypes from 'prop-types'

import StyledImage from './styles/StyledImage'

/**
 * A simple image, nothing special for the moment.
 *
 */
class Image extends React.PureComponent {
  static defaultProps = {
    alt: '',
    height: null,
    width: null,
  }

  static propTypes = {
    /**
     * An alternative text if the image is not displayed.
     */
    alt: PropTypes.string,
    /**
     * The height of the image. You can give a reference to the theme (e.g h10) or a heigth in px or in %
     * If you don't give a height, the height of the theme will be used.
     */
    height: PropTypes.string,
    /**
     * The source of the image.
     */
    src: PropTypes.string.isRequired,
    /**
     * The width of the image. You can give a reference to the theme (e.g w10) or a width in px or in %
     * If you don't five a width, the width of the theme will be used.
     */
    width: PropTypes.string,
  }

  render() {
    const { alt, height, src, width } = this.props
    return <StyledImage alt={alt} height={height} src={src} width={width} />
  }
}

export default Image
