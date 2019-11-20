// @noSnapshot
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import MenuMobile from './components/MenuMobile'
import MenuDesktop from './components/MenuDesktop'
import { MenuContainer } from './styles'

/**
 * The menu is a list of Link elements.
 *
 */
const Menu = ({ className, isResponsive, isVertical, ...rest }) => (
  <MenuContainer className={className} isResponsive={isResponsive} isVertical={isVertical}>
    {(isResponsive || isVertical) && <MenuMobile isVertical={isVertical} {...rest} />}
    {!isVertical && <MenuDesktop {...rest} />}
  </MenuContainer>
)

Menu.defaultProps = {
  className: '',
  isResponsive: true,
  isVertical: false,
  renderElement: null,
  renderMenu: null,
  selectedElement: null,
  variance: 'basic',
}

Menu.propTypes = {
  /**
   * Classes of the menu.
   */
  className: PropTypes.string,
  /**
   * The links in the menu.
   */
  elements: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * Is the menu responsive or not.
   */
  isResponsive: PropTypes.bool,
  /**
   * Is the desktop menu vertical or not.
   */
  isVertical: PropTypes.bool,
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
export default styled(Menu)``
