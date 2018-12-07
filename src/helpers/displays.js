import { css } from 'styled-components'

const displayMap = {
  b: 'block',
  i: 'inline',
  ib: 'inline-block',
  if: 'inline-flex',
  f: 'flex',
}

const resolvedMap = {
  b: 'baseline',
  c: 'column',
  cr: 'column-reverse',
  ce: 'center',
  fe: 'flex-end',
  fs: 'flex-start',
  nw: 'nowrap',
  r: 'row',
  rr: 'row-reverse',
  s: 'stretch',
  sa: 'space-around',
  sb: 'space-between',
  se: 'space-evenly',
  w: 'wrap',
  wr: 'wrap-reverse',
}

/**
 * Inject this style into your component so it can support display props :
 * - alc for align-content
 * - ali for align-items
 * - als for align-self
 * - di for display type
 * - fb for flex-basis
 * - fd for flex-direction
 * - fg for flex-grow
 * - fs for flex-shrink
 * - fw for flew-wrap
 * - jc for justify-content
 * - or for order
 */
export default ({ alc, ali, als, di, fb, fd, fg, fs, fw, jc, or }) => css`
  ${alc && `align-content: ${resolvedMap[alc] || alc}`};
  ${ali && `align-items: ${resolvedMap[ali] || ali}`};
  ${als && `align-self: ${resolvedMap[als] || als}`};
  ${di && `display: ${displayMap[di] || di}`};
  ${fb && `flex-basis: ${fb}`};
  ${fd && `flex-direction: ${resolvedMap[fd] || fd}`};
  ${fg && `flex-grow: ${fg}`};
  ${fs && `flex-shrink: ${fs}`};
  ${fw && `flex-wrap: ${resolvedMap[fw] || fw}`};
  ${jc && `justify-content: ${resolvedMap[jc] || jc}`};
  ${or && `order: ${or}`};
`
