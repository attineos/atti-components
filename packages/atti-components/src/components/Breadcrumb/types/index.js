import PropTypes from 'prop-types'

/**
 * A breadcrumb element
 */
export const ElementType = PropTypes.shape({
  /** Element's display name */
  name: PropTypes.string.isRequired,
  /** Element's url */
  url: PropTypes.string,
})

/**
 * Elements of this breadcrumb.
 * Must be sorted.
 */
export const ElementsType = PropTypes.arrayOf(ElementType)
