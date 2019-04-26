// @noSnapshot
import React from 'react'
import PropTypes from 'prop-types'

import MenuMobile from './components/MenuMobile'
import MenuDesktop from './components/MenuDesktop'
import { MenuContainer } from './styles'

/**
 * The menu is a list of Link elements.
 *
 */
const Menu = props => (
  <MenuContainer isResponsive={props.isResponsive}>
    {props.isResponsive && <MenuMobile {...props} />}
    <MenuDesktop {...props} />
  </MenuContainer>
)

Menu.defaultProps = {
  isResponsive: true,
  renderElement: null,
  renderMenu: null,
  selectedElement: null,
  variance: 'basic',
}

Menu.propTypes = {
  /**
   * The links in the menu.
   */
  elements: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * Is the menu responsive or not.
   */
  isResponsive: PropTypes.bool,
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
export default React.memo(Menu)
