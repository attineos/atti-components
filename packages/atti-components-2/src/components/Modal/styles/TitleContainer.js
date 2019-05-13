import styled from 'styled-components'

const TitleContainer = styled('div')`
  ${({ theme }) => `
    padding: ${theme.components.modal.spaces.paddingHeightContent} ${
    theme.components.modal.spaces.paddingWidthContent
  };
    border-bottom: ${theme.components.modal.borders.titleBottomWidth} solid ${
    theme.components.modal.borders.titleBottomColor
  };
  `}
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export default TitleContainer
