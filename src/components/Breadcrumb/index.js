// @noSnapshot
import React from 'react'
import PropTypes from 'prop-types'
import { map } from 'lodash'
import { ElementsType } from './types'
import BreadcrumbElement from './components/BreadcrumbElement'
import BreadcrumbSeparator from './styles/BreadcrumbSeparator'
import CurrentElement from './styles/CurrentElement'
import StyledBreadcrumb from './styles/StyledBreadcrumb'

/**
 * A breadcrumb component.
 */
const Breadcrumb = ({ elements, separator }) => (
  <StyledBreadcrumb>
    {map(elements, (element, index) => (
      <React.Fragment key={element.name}>
        {element.url && <BreadcrumbElement element={element} />}
        {!element.url && <CurrentElement>{element.name}</CurrentElement>}
        {index + 1 < elements.length && <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>}
      </React.Fragment>
    ))}
  </StyledBreadcrumb>
)

Breadcrumb.defaultProps = {
  separator: ' / ',
}

Breadcrumb.propTypes = {
  /**
   * Array elements of this breadcrumb.
   * Should be sorted.
   */
  elements: ElementsType.isRequired,
  /**
   * Separator character to put between links.
   */
  separator: PropTypes.string,
}

export default Breadcrumb
