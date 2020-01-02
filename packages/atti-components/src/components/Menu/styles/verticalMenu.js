import Container from 'components/Container'
import ItemsHolder from './ItemsHolder'
import { Item } from '../components'

const verticalMenu = theme => `
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${theme.components.menu.vertical.spaces.width};
  padding: ${theme.components.menu.vertical.spaces.padding};
  box-shadow: 2px 0px 6px 0px rgba(0, 0, 0, 0.3);
  overflow-y: auto;
  z-index: 10;

  ${Container} {
    padding: 0;
  }

  ${ItemsHolder} {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  ${Item} {
    padding: ${theme.components.menu.vertical.item.spaces.padding};
  }
`

export default verticalMenu
