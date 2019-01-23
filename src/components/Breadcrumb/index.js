// @noSnapshot
import React, { PureComponent } from 'react'
import styled from 'styled-components'
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
class Breadcrumb extends PureComponent {
  render() {
    const { className, elements, separator } = this.props

    return (
      <StyledBreadcrumb className={className}>
        {map(elements, (element, index) => (
          <React.Fragment key={element.name}>
            {element.url && <BreadcrumbElement element={element} />}
            {!element.url && <CurrentElement>{element.name}</CurrentElement>}
            {index + 1 < elements.length && <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>}
          </React.Fragment>
        ))}
      </StyledBreadcrumb>
    )
  }
}

Breadcrumb.defaultProps = {
  className: '',
  separator: ' / ',
}

Breadcrumb.propTypes = {
  /**
   * Classes of the Breadcrumb.
   */
  className: PropTypes.string,
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

export default styled(Breadcrumb)``
