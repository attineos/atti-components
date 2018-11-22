import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import StyledImage from './styles/StyledImage'

/**
 * A simple image, nothing special for the moment.
 *
 */
const Image = ({ alt, className, height, src, width }) => (
  <StyledImage alt={alt} className={className} height={height} src={src} width={width} />
)

Image.defaultProps = {
  alt: '',
  className: '',
  height: null,
  width: null,
}

Image.propTypes = {
  /**
   * An alternative text if the image is not displayed.
   */
  alt: PropTypes.string,
  /**
   * Classes of the Image.
   */
  className: PropTypes.string,
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

/** @component */
export default styled(Image)``
