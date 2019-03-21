import { range, map, mapKeys, mapValues } from 'lodash'
import calcCssSize from 'helpers/generators/calcCssSize'

/**
 * Different spaces values
 */
const baseline = '6px'

const spaces = {
  baseline: baseline,
  s0: '0px',

  ...mapValues(
    mapKeys(
      map(range(1, 30), index => ({
        key: `s${index}`,
        value: calcCssSize(baseline, value => value * 0.25 * index),
      })),
      'key',
    ),
    'value',
  ),

  quarter: '25%',
  halt: '50%',
  threeQuarter: '75%',
  full: '100%',
}

export default spaces
