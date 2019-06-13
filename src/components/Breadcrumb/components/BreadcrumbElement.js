// @noSnapshot
import React from 'react'
import Link from '../../Link'
import { ElementType } from '../types'

/**
 * A breadcrumb element.
 */
const BreadcrumbElement = ({ element }) => (
  <Link href={element.url} onClick={element.onClick}>
    {element.name}
  </Link>
)

BreadcrumbElement.propTypes = {
  /**
   * Breadcrumb element.
   */
  element: ElementType.isRequired,
}

export default BreadcrumbElement
