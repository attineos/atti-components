import { range, reduce } from 'lodash'

/**
 * Base fonts.
 */
const fontFamilyPrimary = 'Roboto'
const fontFamilySecondary = 'Inconsolata, Monaco, consolas, "courrier new"'

const fonts = {
  global: {
    fontFamilyPrimary: fontFamilyPrimary,
    fontFamilySecondary: fontFamilySecondary,
  },
  fontSize: {
    xs: '10px',
    s: '12px',
    m: '14px',
    l: '18px',
    xl: '24px',
    xxl: '30px',
  },
  fontWeight: reduce(range(0, 10), (acc, cur) => { ...acc, [`fw${cur}`]: `${100 + cur * 100}` }, {}),
  fontFamily: fontFamilyPrimary,
  lineHeight: reduce(range(0, 20), (acc, cur) => { ...acc, [`lh${cur}`]: `${10 + cur * 2}` }, {}),
}

export default fonts
