import styled from 'styled-components'

const Arrow = styled('i')`
  border: solid ${({ theme }) => theme.colors.white};
  border-width: 0 ${({ theme }) => `${theme.borders.widths.bw2} ${theme.borders.widths.bw2}`} 0;
  display: inline-block;
  padding: 3px;
  margin-left: auto;
  transform: rotate(-45deg);
  transition: all ease ${({ theme }) => theme.animations.duration.d3};
  &.open {
    transform: rotate(45deg);
  }
`

export default Arrow
