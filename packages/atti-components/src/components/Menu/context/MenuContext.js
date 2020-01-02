import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'

const MenuContext = React.createContext()

const MenuProvider = ({ children, subMenu }) => {
  const [subMenuOpened, setSubMenuOpened] = useState(subMenu)
  return (
    <MenuContext.Provider
      value={{
        subMenuOpened: subMenuOpened,
        setSubMenuOpened: subOpened => setSubMenuOpened(subOpened),
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}

MenuProvider.defaultProps = {
  subMenu: '',
}

MenuProvider.propTypes = {
  children: PropTypes.any.isRequired,
  subMenu: PropTypes.string,
}

const useMenu = () => useContext(MenuContext)

export { MenuProvider, useMenu }
