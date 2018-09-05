import image from '../components/Image/theme'
import link from '../components/Link/theme'
import select from '../components/Select/theme'
import textarea from '../components/TextArea/theme'

export default constants => ({
  img: image(constants),
  link: link(constants),
  select: select(constants),
  textarea: textarea(constants),
})
