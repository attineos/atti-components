import link from '../components/Link/theme'
import textarea from '../components/TextArea/theme'
import select from '../components/Select/theme'

export default constants => ({
  link: link(constants),
  select: select(constants),
  textarea: textarea(constants),
})
