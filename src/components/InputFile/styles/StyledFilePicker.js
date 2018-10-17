import styled from 'styled-components'

import Text from '../../Text'

const StyledFilePicker = styled(Text.withComponent('button'))`
  cursor: pointer;
  border: none;

  padding: ${({ theme }) =>
    `${theme.components.inputFile.spaces.paddingTopBottom} ${
      theme.components.inputFile.spaces.paddingLeftRight
    }`};
  color: ${({ theme }) => theme.components.inputFile.colors.text};
  background-color: ${({ theme }) => theme.components.inputFile.colors.background};
  font-family: ${({ theme }) => theme.components.inputFile.fonts.fontFamily || 'inherit'};
`

export default StyledFilePicker
