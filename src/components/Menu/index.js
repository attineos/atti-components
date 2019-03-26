// @noSnapshot
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { isNull, map, isFunction, isUndefined, upperFirst } from 'lodash'
import chain from 'helpers/generators/chain'

import Styles from './styles'

/**
 * The menu is a list of Link elements.
 *
 */
class Menu extends PureComponent {
  getStylesFromType() {
    const { type } = this.props

    return Styles[upperFirst(type)]
  }

  renderElement = (element, isSelected) => {
    const { renderElement } = this.props

    const { StyledItem, StyledItemLink } = this.getStylesFromType()

    return chain(
      // We assume a valid result as soon as we got a non null element
      element => !isNull(element) && !isUndefined(element),
      // Most precise, we got a custom render function for THAT element
      () =>
        element && element.render && isFunction(element.render)
          ? element.render(element, isSelected)
          : null,
      // A little less precise, we got a custom render function for each item
      () =>
        renderElement && isFunction(renderElement) ? renderElement(element, isSelected) : null,
      // Least precise, neither other function returned something, we default to some hand made rendering
      () => (
        <StyledItem key={element.id || element.name}>
          <StyledItemLink
            href={element.url}
            target={element.target}
            onClick={element.onClick}
            isSelected={isSelected}
          >
            {element.name}
          </StyledItemLink>
        </StyledItem>
      ),
    )
  }

  renderMenu = (elements, children) => {
    const { renderMenu } = this.props

    const { StyledMenu, StyledItemsList } = this.getStylesFromType()

    return chain(
      // We assume a valid result as soon as we got a non null element
      element => !isNull(element) && !isUndefined(element),
      // A little less precise, we got a custom render function for each item
      () => (renderMenu && isFunction(renderMenu) ? renderMenu(elements, children) : null),
      // Least precise, neither other function returned something, we default to some hand made rendering
      () => (
        <StyledMenu>
          <StyledItemsList>{children}</StyledItemsList>
        </StyledMenu>
      ),
    )
  }

  render() {
    const { elements, selectedElement } = this.props

    return this.renderMenu(
      elements,
      <React.Fragment>
        {map(elements, element => (
          <React.Fragment key={element.text}>
            {this.renderElement(element, (element.id || element.name) === selectedElement)}
          </React.Fragment>
        ))}
      </React.Fragment>,
    )
  }
}

Menu.defaultProps = {
  renderElement: null,
  renderMenu: null,
  selectedElement: null,
  type: 'basic',
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
  /**
   * The function to use for rendering the menu
   */
  renderMenu: PropTypes.func,
  /**
   * Which element is currently selected
   */
  selectedElement: PropTypes.string,
  /**
   * Which type of menu to display
   */
  type: PropTypes.oneOf(['basic', 'withButtons']),
}

/** @component */
export default Menu
