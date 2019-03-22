import styled, { css } from 'styled-components'

const sizes = css`
  height: ${({ theme }) => theme.components.inputFile.sizes.height};
  width: ${({ theme }) => theme.components.inputFile.sizes.width};
`

const StyledContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;

  ${sizes};
`

export default StyledContainer
