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
    fs10: '10px',
    fs12: '12px',
    fs14: '14px',
    fs16: '16px',
    fs20: '20px',
    fs24: '24px',
    fs32: '32px',
    fs48: '48px',
  },
  fontWeight: reduce(
    range(0, 10),
    (acc, cur) => ({ ...acc, [`fw${cur}`]: `${100 + cur * 100}` }),
    {},
  ),
  fontFamily: fontFamilyPrimary,
  lineHeight: `${reduce(
    range(0, 20),
    (acc, cur) => ({ ...acc, [`lh${cur}`]: `${10 + cur * 2}` }),
    {},
  )}px`,
}

export default fonts
