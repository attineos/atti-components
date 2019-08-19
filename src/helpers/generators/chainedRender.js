import { isNull, isUndefined, isFunction } from 'lodash'
import chain from './chain'

const chainedRender = (defaultRender, customRender, ...params) => {
  return chain(
    element => !isNull(element) && !isUndefined(element),
    () => customRender && isFunction(customRender) && customRender(...params),
    () => defaultRender(...params),
  )
}

export default chainedRender
