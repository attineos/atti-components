// @noSnapshot
import React from 'react'
import PropTypes from 'prop-types'
import Link from '../../Link'
import CurrentElement from '../styles/CurrentElement'

/**
 * A breadcrumb element.
 */
const BreadcrumbElement = props =>
  props.href ? <Link {...props} /> : <CurrentElement {...props} />

BreadcrumbElement.propTypes = {
  /** Url where to redirect on click*/
  href: PropTypes.string,
}

export default BreadcrumbElement
