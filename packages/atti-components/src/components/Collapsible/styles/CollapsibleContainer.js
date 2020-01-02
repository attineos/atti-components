import styled from 'styled-components'

const CollapsibleContainer = styled('div')`
  max-height: 0;
  overflow: hidden;
  transition: max-height ${({ theme }) => theme.animations.duration.d3} ease-out;
`

export default CollapsibleContainer
