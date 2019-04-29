import styled, { css } from 'styled-components'
import { Text } from '../../Typographies'

const borders = css`
  border: ${({ theme }) => theme.components.progressBar.borders.borderWidth} solid
    ${({ theme }) => theme.components.progressBar.borders.borderColor};
  border-radius: ${({ theme }) => theme.components.progressBar.borders.borderRadius};
`

const before = css`
  &:before {
    background: ${({ theme }) => theme.components.progressBar.colors.fill};
    border-radius: ${({ theme }) => theme.components.progressBar.borders.borderRadius};
    content: ' ';
    height: 100%;
    position: absolute;
    transition: width ${({ fillingSpeed }) => fillingSpeed}ms;
    width: ${({ percent }) => percent}%;
  }
`

const colors = css`
  background: ${({ theme }) => theme.components.progressBar.colors.background};
`

const positionFirstComponent = css`
  display: flex;
  justify-content: ${({ fillingOrientation }) => fillingOrientation};
  position: relative;
`

const positionText = css`
  > ${Text} {
    color: ${({ theme }) => theme.components.progressBar.colors.text};
    display: flex;
    justify-content: center;
    margin: 0;
    position: relative;
    width: 100%;
    align-items: center;
  }
`
const size = css`
  ${({ theme }) => `
    height: ${theme.components.progressBar.sizes.height};
    width: ${theme.components.progressBar.sizes.width};
  `};
`

const StyledProgressBar = styled.div`
  ${before};
  ${borders};
  ${colors};
  ${positionFirstComponent} ${positionText};
  ${size};
  padding: 2px 0;
  user-select: none;
`
export default StyledProgressBar
