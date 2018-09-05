import bigText from '../components/BigText/theme'
import button from '../components/Button/theme'
import header1 from '../components/Header1/theme'
import header2 from '../components/Header2/theme'
import header3 from '../components/Header3/theme'
import link from '../components/Link/theme'
import smallText from '../components/smallText/theme'
import text from '../components/Text/theme'
import textarea from '../components/TextArea/theme'
import select from '../components/Select/theme'

export default constants => ({
  bigText: bigText(constants),
  button: button(constants),
  header1: header1(constants),
  header2: header2(constants),
  header3: header3(constants),
  link: link(constants),
  select: select(constants),
  smallText: smallText(constants),
  text: text(constants),
  textarea: textarea(constants),
})
