import animations from './animations'
import borders from './borders'
import boxShadows from './boxShadows'
import colors from './colors'
import fonts from './fonts'
import opacities from './opacities'
import spaces from './spaces'
import breakpoints from './breakpoints'
import elevations from './elevations'

import componentsFactory from './componentsFactory'
import formsFactory from './forms'
import layoutFactory from './layout'

export default {
  breakpoints,
  animations,
  borders,
  boxShadows,
  colors,
  elevations,
  fonts,
  opacities,
  spaces,

  factories: [
    { factory: layoutFactory, name: 'layout' },
    { factory: formsFactory, name: 'forms' },
    { factory: componentsFactory, name: 'components' },
  ],
}
