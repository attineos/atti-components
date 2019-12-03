import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Container from 'components/Container'

import { BurgerMenu, Item } from './components'
import { ItemsHolder, MenuHolder, MenuMobile, Nav } from './styles'

const Menu = ({ children, isResponsive, isVertical }) => {
  const [isOpened, setIsOpened] = useState(false)

  const updateOpened = () => {
    setIsOpened(prevIsOpened => !prevIsOpened)
  }

  return (
    <>
      {isResponsive && (
        <MenuMobile>
          <Container>
            <BurgerMenu updateOpened={updateOpened} opened={isOpened} />
          </Container>
        </MenuMobile>
      )}
      <MenuHolder isVertical={isVertical} isResponsive={isResponsive} opened={isOpened}>
        <Container>
          <Nav>
            <ItemsHolder>{children}</ItemsHolder>
          </Nav>
        </Container>
      </MenuHolder>
    </>
  )
}

Menu.defaultProps = {
  children: null,
  isResponsive: false,
  isVertical: false,
}

Menu.propTypes = {
  /**
   * Content of the Menu.
   */
  children: PropTypes.any,
  /**
   * Is the menu responsive or not.
   */
  isResponsive: PropTypes.bool,
  /**
   * Is the desktop menu vertical or not.
   */
  isVertical: PropTypes.bool,
}

Menu.Item = Item

export default Menu
