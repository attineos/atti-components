// @noSnapshot
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { isNull, map, isFunction, isUndefined } from 'lodash'
import chain from 'helpers/generators/chain'

import { ElementsType } from './types'
import BreadcrumbElement from './components/BreadcrumbElement'
import BreadcrumbSeparator from './styles/BreadcrumbSeparator'
import CurrentElement from './styles/CurrentElement'
import StyledBreadcrumb from './styles/StyledBreadcrumb'

/**
 * A breadcrumb component.
 */
const Breadcrumb = ({ elements, renderElement, separator, ...rest }) => {
  const displayElement = element =>
    chain(
      // We assume a valid result as soon as we got a non null element
      element => !isNull(element) && !isUndefined(element),
      // Most precise, we got a custom render function for THAT element
      () =>
        element && element.render && isFunction(element.render) ? element.render(element) : null,
      // A little less precise, we got a custom render function for each item
      () => (renderElement && isFunction(renderElement) ? renderElement(element) : null),
      // Least precise, neither other function returned something, we default to some hand made rendering
      () => (
        <>
          {element.url && <BreadcrumbElement element={element} />}
          {!element.url && <CurrentElement>{element.name}</CurrentElement>}
        </>
      ),
    )

  return (
    <StyledBreadcrumb {...rest}>
      {map(elements, (element, index, elements) => (
        <React.Fragment key={element.name}>
          {displayElement(element)}
          {index + 1 < elements.length && <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>}
        </React.Fragment>
      ))}
    </StyledBreadcrumb>
  )
}

Breadcrumb.defaultProps = {
  separator: ' / ',
  renderElement: null,
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
  /**
   * The function to use for rendering of each element
   */
  renderElement: PropTypes.func,
}

/** @component */
export default styled(Breadcrumb)``
