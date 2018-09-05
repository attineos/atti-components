import styled, { css } from 'styled-components'

const border = css`
  border-width: ${({ theme }) => theme.components.radio.border.outterBorder};
`

const sizes = css`
  height: ${({ theme }) => theme.components.radio.sizes.heights};
  width: ${({ theme }) => theme.components.radio.sizes.widths};
`

const HiddenInputRadio = styled.input`
  ${border};
  ${sizes};
  position: absolute;
  top: 0;
  left: 0;

  opacity: 0;
  cursor: pointer;
  margin: 0;
`

export default HiddenInputRadio
