import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Container from 'components/Container'

import { BurgerMenu, Item, ItemGroup } from './components'
import { ItemsHolder, Li, MenuHolder, MenuMobile, Nav } from './styles'
import { MenuProvider } from './context/MenuContext'

const Menu = ({ children, isResponsive, isVertical, ...rest }) => {
  const [isOpened, setIsOpened] = useState(false)

  const updateOpened = () => {
    setIsOpened(prevIsOpened => !prevIsOpened)
  }

  const items = React.Children.map(children, child => {
    return <Li>{child}</Li>
  })

  return (
    <div {...rest}>
      <MenuProvider>
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
              <ItemsHolder>{items}</ItemsHolder>
            </Nav>
          </Container>
        </MenuHolder>
      </MenuProvider>
    </div>
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
Menu.ItemGroup = ItemGroup

export default styled(Menu)``
