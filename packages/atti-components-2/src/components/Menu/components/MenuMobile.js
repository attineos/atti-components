import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { isNull, map, isFunction, isUndefined } from 'lodash'

import chain from 'helpers/generators/chain'

import {
  MenuItem,
  MenuLink,
  MenuLinksList,
  MenuNavMobile,
  MenuOpenerContainer,
  MenuOpenerLine,
  SideMenu,
} from '../styles/MenuMobile'

class MenuMobile extends PureComponent {
  state = {
    opened: false,
  }

  handleClick = () => {
    this.setState(prevState => ({
      opened: !prevState.opened,
    }))
  }

  renderElement = (element, isSelected) => {
    const { renderElement } = this.props

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
        <MenuItem key={element.id || element.name} onClick={element.onClick}>
          <MenuLink
            href={element.url}
            target={element.target}
            onClick={element.onClick}
            isSelected={isSelected}
          >
            {element.name}
          </MenuLink>
        </MenuItem>
      ),
    )
  }

  render() {
    const { opened } = this.state

    const { className, elements, selectedElement } = this.props

    return (
      <MenuNavMobile className={className}>
        <MenuOpenerContainer onClick={this.handleClick} opened={opened}>
          <MenuOpenerLine />
          <MenuOpenerLine />
          <MenuOpenerLine />
          <MenuOpenerLine />
        </MenuOpenerContainer>

        <SideMenu opened={opened}>
          <MenuLinksList>
            {map(elements, element => (
              <React.Fragment key={element.text}>
                {this.renderElement(element, (element.id || element.name) === selectedElement)}
              </React.Fragment>
            ))}
          </MenuLinksList>
        </SideMenu>
      </MenuNavMobile>
    )
  }
}

MenuMobile.defaultProps = {
  className: '',
  renderElement: null,
  selectedElement: null,
}

MenuMobile.propTypes = {
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
   * Which element is currently selected
   */
  selectedElement: PropTypes.string,
}

export default styled(MenuMobile)``
