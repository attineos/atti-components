import checkbox from '../components/Checkbox/theme'
import image from '../components/Image/theme'
import link from '../components/Link/theme'
import menu from '../components/Menu/theme'
import radio from '../components/Radio/theme'
import select from '../components/Select/theme'
import textarea from '../components/TextArea/theme'

export default constants => ({
  img: image(constants),
  checkbox: checkbox(constants),
  link: link(constants),
  menu: menu(constants),
  radio: radio(constants),
  select: select(constants),
  textarea: textarea(constants),
})
