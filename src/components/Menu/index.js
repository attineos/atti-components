// @noSnapshot
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { isNull, map, isFunction, isUndefined } from 'lodash'
import chain from 'helpers/generators/chain'
import Item from './styles/Item'
import ItemLink from './styles/ItemLink'
import ItemsList from './styles/ItemsList'
import StyledMenu from './styles/StyledMenu'

/**
 * The menu is a list of Link elements.
 *
 */
class Menu extends PureComponent {
  renderElement = element => {
    const { renderElement } = this.props

    return chain(
      // We assume a valid result as soon as we got a non null element
      element => !isNull(element) && !isUndefined(element),
      // Most precise, we got a custom render function for THAT element
      () =>
        element && element.render && isFunction(element.render) ? element.render(element) : null,
      // A little less precise, we got a custom render function for each item
      () => (renderElement && isFunction(renderElement) ? renderElement(element) : null),
      // Least precise, neither other function returned something, we default to some hand made rendering
      () => (
        <Item key={element.url}>
          <ItemLink href={element.url} target={element.target}>
            {element.name}
          </ItemLink>
        </Item>
      ),
    )
  }

  render() {
    const { elements } = this.props

    return (
      <StyledMenu>
        <ItemsList>
          {map(elements, element => (
            <React.Fragment key={element.text}>{this.renderElement(element)}</React.Fragment>
          ))}
        </ItemsList>
      </StyledMenu>
    )
  }
}

Menu.defaultProps = {
  renderElement: null,
}

Menu.propTypes = {
  /**
   * The links in the menu.
   */
  elements: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * The function to use for rendering of each element
   */
  renderElement: PropTypes.func,
}

export default Menu
