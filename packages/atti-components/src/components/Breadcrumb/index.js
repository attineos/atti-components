// @noSnapshot
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {map} from 'lodash'
import BreadcrumbElement from './components/BreadcrumbElement'
import BreadcrumbSeparator from './styles/BreadcrumbSeparator'
import StyledBreadcrumb from './styles/StyledBreadcrumb'

/**
 * A breadcrumb component.
 */
const Breadcrumb = ({children, elements, separator, ...rest}) => {
  const displayChild = (child, withSeparator = true) => <>
    {child}
    {withSeparator && <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>}
  </>
  // Store a boolean value to know upfront if we need to iterate on children or not
  const multipleElements = React.Children.count(children) > 1

  return <StyledBreadcrumb {...rest}>
    { !multipleElements && displayChild(children, false)}
    { multipleElements &&
      map(children, (el, id) => {
      const isLast = id === children.length - 1
      return displayChild(el, !isLast)
    })}
  </StyledBreadcrumb>
}

Breadcrumb.Element = BreadcrumbElement

Breadcrumb.defaultProps = {
  separator: ' / ',
}

Breadcrumb.propTypes = {
  /**
   * Separator character to put between links.
   */
  separator: PropTypes.string,
}

/** @component */
export default styled(Breadcrumb)``
