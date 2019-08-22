import { reduce, isFunction } from 'lodash'

/**
 * Chain function calls until one return a "valid" result
 *
 * A valid result is a result for which the validity function return true for
 *
 * If no function return a valid result, null is returned, the last function can be used to return a default value
 */
const chain = (validity, ...callsToChain) => {
  if (!isFunction(validity)) {
    throw new Error('Validity function isnt a callable function')
  }

  return reduce(
    callsToChain,
    (prev, callToChain) => {
      if (validity(prev)) {
        return prev
      }

      if (callToChain && isFunction(callToChain)) {
        return callToChain()
      }

      return null
    },
    null,
  )
}
export default chain
