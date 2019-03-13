import { css } from 'styled-components'

import { circleGrow } from './circleGrow'
import { flash } from './flash'
import { focus } from './focus'
import { shine } from './shine'
import {
  slideBottom,
  slideLeft,
  slideOpenDiag,
  slideOpenHorizontal,
  slideOpenVertical,
  slideRight,
  slideTop,
} from './slide'

const baseCss = css`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  &:after {
    content: '';
    position: absolute;
  }
`

const getAnimation = type => css`
  ${baseCss};
  ${type === 'circleGrow' && circleGrow};
  ${type === 'flash' && flash};
  ${type === 'focus' && focus};
  ${type === 'shine' && shine};
  ${type === 'slideBottom' && slideBottom};
  ${type === 'slideLeft' && slideLeft};
  ${type === 'slideOpenDiag' && slideOpenDiag};
  ${type === 'slideOpenHorizontal' && slideOpenHorizontal};
  ${type === 'slideOpenVertical' && slideOpenVertical};
  ${type === 'slideRight' && slideRight};
  ${type === 'slideTop' && slideTop};
`

export default getAnimation
