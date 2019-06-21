import styled from 'styled-components'

const ContentContainer = styled('aside')`
  padding: ${({ theme }) =>
    `${theme.components.modal.spaces.paddingHeightContent} ${theme.components.modal.spaces.paddingWidthContent}`};
  overflow: auto;
  max-height: 70vh;
`

export default ContentContainer
