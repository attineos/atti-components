import styled from 'styled-components'

const CollapsibleContainer = styled('div')`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
`

export default CollapsibleContainer
