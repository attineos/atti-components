// @noSnapshot
import React, { Fragment, PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { isNull, map, isFunction, isUndefined, upperFirst } from 'lodash'
import chain from 'helpers/generators/chain'

import Styles from '../styles/variances'

/**
 * The menu is a list of Link elements.
 *
 */
class MenuDesktop extends PureComponent {
  getStylesFromType() {
    const { variance } = this.props

    return Styles[upperFirst(variance)]
  }

  renderElement = (element, isSelected) => {
    const { renderElement } = this.props

    const { StyledItem, StyledItemLink } = this.getStylesFromType()

    return (
      <Fragment key={element.id || element.name}>
        {chain(
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
            <StyledItem onClick={element.onClick}>
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
        )}
      </Fragment>
    )
  }

  renderMenu = (elements, children) => {
    const { className, renderMenu } = this.props

    const { StyledMenu, StyledItemsList } = this.getStylesFromType()

    return chain(
      // We assume a valid result as soon as we got a non null element
      element => !isNull(element) && !isUndefined(element),
      // A little less precise, we got a custom render function for each item
      () => (renderMenu && isFunction(renderMenu) ? renderMenu(elements, children) : null),
      // Least precise, neither other function returned something, we default to some hand made rendering
      () => (
        <StyledMenu className={className}>
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
        {map(elements, element =>
          this.renderElement(element, (element.id || element.name) === selectedElement),
        )}
      </React.Fragment>,
    )
  }
}

MenuDesktop.defaultProps = {
  className: '',
  renderElement: null,
  renderMenu: null,
  selectedElement: null,
  variance: 'basic',
}

MenuDesktop.propTypes = {
  /**
   * The classes of the menu.
   */
  className: PropTypes.string,
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
  variance: PropTypes.oneOf(['basic', 'withButtons', 'withLiftedTabs']),
}

/** @component */
export default styled(MenuDesktop)``
