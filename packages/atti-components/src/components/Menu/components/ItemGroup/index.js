import React from 'react'
import PropTypes from 'prop-types'

import Item from '../Item'
import { Arrow, ItemsContainer, Li, Title } from './styles'

import { useMenu } from '../../context/MenuContext'

const ItemGroup = ({ children, title }) => {
  const { setSubMenuOpened, subMenuOpened } = useMenu()
  const isOpen = subMenuOpened === title

  const items = React.Children.map(children, child => {
    return <Li>{child}</Li>
  })

  return (
    <>
      <Item
        aria-expanded={isOpen}
        as={Title}
        type="button"
        onClick={() => setSubMenuOpened(isOpen ? '' : title)}
      >
        {title} <Arrow className={isOpen && 'open'} />
      </Item>
      <ItemsContainer forwardedAs="ul" open={isOpen}>
        {items}
      </ItemsContainer>
    </>
  )
}

ItemGroup.propTypes = {
  /**
   * Content of the ItemGroup. Basically a set of Menu.Item.
   */
  children: PropTypes.any.isRequired,
  /**
   * The title of the ItemGroup
   */
  title: PropTypes.string.isRequired,
}

export default ItemGroup
