import alert from '../../components/Alert/theme'
import avatar from '../../components/Avatar/theme'
import badge from '../../components/Badge/theme'
import breadcrumb from '../../components/Breadcrumb/theme'
import button from '../../components/Button/theme'
import buttonGroup from '../../components/ButtonGroup/theme'
import checkBox from '../../components/CheckBox/theme'
import image from '../../components/Image/theme'
import input from '../../components/Input/theme'
import inputCalendar from '../../components/InputCalendar/theme'
import inputFile from '../../components/InputFile/theme'
import inputGroup from '../../components/InputGroup/theme'
import inputMonth from '../../components/InputMonth/theme'
import inputPopdown from '../../components/InputPopdown/theme'
import inputTime from '../../components/InputTime/theme'
import link from '../../components/Link/theme'
import loader from '../../components/Loader/theme'
import menu from '../../components/Menu/theme'
import modal from '../../components/Modal/theme'
import progressBar from '../../components/ProgressBar/theme'
import radio from '../../components/Radio/theme'
import select from '../../components/Select/theme'
import table from '../../components/Table/theme'
import textarea from '../../components/TextArea/theme'
import tooltip from '../../components/Tooltip/theme'

import {
  bigText,
  header1,
  header2,
  header3,
  header4,
  label,
  smallText,
  text,
} from '../../components/Typographies/theme'

export default constants => ({
  alert: alert(constants),
  avatar: avatar(constants),
  badge: badge(constants),
  bigText: bigText(constants),
  breadcrumb: breadcrumb(constants),
  button: button(constants),
  buttonGroup: buttonGroup(constants),
  checkBox: checkBox(constants),
  header1: header1(constants),
  header2: header2(constants),
  header3: header3(constants),
  header4: header4(constants),
  img: image(constants),
  input: input(constants),
  inputCalendar: inputCalendar(constants),
  inputFile: inputFile(constants),
  inputGroup: inputGroup(constants),
  inputMonth: inputMonth(constants),
  inputPopdown: inputPopdown(constants),
  inputTime: inputTime(constants),
  label: label(constants),
  link: link(constants),
  loader: loader(constants),
  menu: menu(constants),
  modal: modal(constants),
  progressBar: progressBar(constants),
  radio: radio(constants),
  select: select(constants),
  smallText: smallText(constants),
  table: table(constants),
  text: text(constants),
  textarea: textarea(constants),
  tooltip: tooltip(constants),
})
