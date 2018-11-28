import alert from '../components/Alert/theme'
import badge from '../components/Badge/theme'
import bigText from '../components/BigText/theme'
import breadcrumb from '../components/Breadcrumb/theme'
import button from '../components/Button/theme'
import checkBox from '../components/CheckBox/theme'
import header1 from '../components/Header1/theme'
import header2 from '../components/Header2/theme'
import header3 from '../components/Header3/theme'
import image from '../components/Image/theme'
import input from '../components/Input/theme'
import inputFile from '../components/InputFile/theme'
import label from '../components/Label/theme'
import link from '../components/Link/theme'
import loader from '../components/Loader/theme'
import menu from '../components/Menu/theme'
import option from '../components/Option/theme'
import optionPanel from '../components/OptionPanel/theme'
import progressBar from '../components/ProgressBar/theme'
import radio from '../components/Radio/theme'
import select from '../components/Select/theme'
import smallText from '../components/SmallText/theme'
import text from '../components/Text/theme'
import textarea from '../components/TextArea/theme'

export default constants => ({
  alert: alert(constants),
  badge: badge(constants),
  bigText: bigText(constants),
  breadcrumb: breadcrumb(constants),
  button: button(constants),
  checkBox: checkBox(constants),
  header1: header1(constants),
  header2: header2(constants),
  header3: header3(constants),
  img: image(constants),
  input: input(constants),
  inputFile: inputFile(constants),
  label: label(constants),
  link: link(constants),
  loader: loader(constants),
  menu: menu(constants),
  option: option(constants),
  optionPanel: optionPanel(constants),
  progressBar: progressBar(constants),
  radio: radio(constants),
  select: select(constants),
  smallText: smallText(constants),
  text: text(constants),
  textarea: textarea(constants),
})
