import bigText from '../components/BigText/theme'
import button from '../components/Button/theme'
import checkbox from '../components/Checkbox/theme'
import header1 from '../components/Header1/theme'
import header2 from '../components/Header2/theme'
import header3 from '../components/Header3/theme'
import image from '../components/Image/theme'
import link from '../components/Link/theme'
import loader from '../components/Loader/theme'
import menu from '../components/Menu/theme'
import radio from '../components/Radio/theme'
import select from '../components/Select/theme'
import smallText from '../components/SmallText/theme'
import text from '../components/Text/theme'
import textarea from '../components/TextArea/theme'

export default constants => ({
  bigText: bigText(constants),
  button: button(constants),
  checkbox: checkbox(constants),
  header1: header1(constants),
  header2: header2(constants),
  header3: header3(constants),
  img: image(constants),
  link: link(constants),
  loader: loader(constants),
  menu: menu(constants),
  radio: radio(constants),
  select: select(constants),
  smallText: smallText(constants),
  text: text(constants),
  textarea: textarea(constants),
})
