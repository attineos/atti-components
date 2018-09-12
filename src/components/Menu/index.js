import PropTypes from 'prop-types'
import React from 'react'

import { map } from 'lodash'
import Link from '../Link'
import StyledMenu from './styles/StyledMenu'

/**
 * The menu is a list of links.
 *
 * @version 0.1
 * @author Joseph Lefevre
 */
const Menu = ({ values }) => (
  <StyledMenu>
    {map(values, (elt, ind) => (
      <React.Fragment key={elt.href}>
        <Link href={elt.href}>{elt.text}</Link>
        {ind < values.length - 1 && ' / '}
      </React.Fragment>
    ))}
  </StyledMenu>
)

Menu.propTypes = {
  /**
   * The links in the menu.
   */
  values: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Menu
