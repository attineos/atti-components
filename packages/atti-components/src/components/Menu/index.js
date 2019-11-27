import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Container from 'components/Container'

import { BurgerMenu, Item } from './components'
import { ItemsHolder, MenuHolder, MenuMobile, Nav } from './styles'

const Menu = props => {
  const { children, isResponsive, isVertical } = props

  const [opened, setOpened] = useState(false)

  const updateOpened = () => {
    setOpened(!opened)
  }

  return (
    <>
      {isResponsive && (
        <MenuMobile>
          <Container>
            <BurgerMenu updateOpened={updateOpened} opened={opened} />
          </Container>
        </MenuMobile>
      )}
      <MenuHolder isVertical={isVertical} isResponsive={isResponsive} opened={opened}>
        <Container>
          <Nav>
            <ItemsHolder>{children}</ItemsHolder>
          </Nav>
        </Container>
      </MenuHolder>
    </>
  )
}

Menu.propTypes = {
  children: PropTypes.any,
  isResponsive: PropTypes.bool,
  isVertical: PropTypes.bool,
}

Menu.defaultProps = {
  children: null,
  isResponsive: false,
  isVertical: false,
}

Menu.Item = Item

export default Menu
