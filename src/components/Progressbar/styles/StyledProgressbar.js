import styled, { css } from 'styled-components'
import Text from '../../Text'

const borders = css`
  border: ${({ theme }) => theme.components.progressbar.borders.borderWidth} solid
    ${({ theme }) => theme.components.progressbar.borders.borderColor};
  border-radius: 25px;
`

const before = css`
  &:before {
    background: ${({ theme }) => theme.components.progressbar.colors.fill};
    border-radius: 25px;
    content: ' ';
    height: 100%;
    position: absolute;
    transition: width ${({ fillingSpeed }) => fillingSpeed}ms;
    width: ${({ percent }) => percent}%;
  }
`

const colors = css`
  background: ${({ theme }) => theme.components.progressbar.colors.background};
`

const positionFirstComponent = css`
  display: flex;
  justify-content: ${({ fillingOrientation }) => fillingOrientation};
  position: relative;
`

const positionText = css`
  > ${Text} {
    color: ${({ theme }) => theme.components.progressbar.colors.text};
    display: flex;
    justify-content: center;
    margin: 0;
    position: relative;
    width: 100%;
  }
`
const size = css`
  ${({ theme }) => `
    height: ${theme.components.progressbar.sizes.height};
    width: ${theme.components.progressbar.sizes.width};
  `};
`

const StyledProgressbar = styled.div`
  ${before};
  ${borders};
  ${colors};
  ${positionFirstComponent} ${positionText};
  ${size};
  user-select: none;
  box-sizing: border-box;
`
export default StyledProgressbar
