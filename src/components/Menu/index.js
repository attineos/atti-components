// @noSnapshot
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { map } from 'lodash'
import Item from './styles/Item'
import ItemLink from './styles/ItemLink'
import ItemsList from './styles/ItemsList'
import StyledMenu from './styles/StyledMenu'

/**
 * The menu is a list of Link elements.
 *
 */
class Menu extends PureComponent {
  render() {
    const { values } = this.props

    return (
      <StyledMenu>
        <ItemsList>
          {map(values, elt => (
            <Item key={elt.href}>
              <ItemLink href={elt.href} target={elt.target}>
                {elt.text}
              </ItemLink>
            </Item>
          ))}
        </ItemsList>
      </StyledMenu>
    )
  }
}

Menu.propTypes = {
  /**
   * The links in the menu.
   */
  values: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Menu
