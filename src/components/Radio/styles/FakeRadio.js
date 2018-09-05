import styled, { css } from 'styled-components'

const border = css`
  border-radius: ${({ theme }) => theme.components.radio.border.radius};
  border-width: ${({ theme }) => theme.components.radio.border.outterBorder};
`

const colors = css`
  background: ${({ theme }) => theme.components.radio.colors.background};
  color: ${({ theme }) => theme.components.radio.colors.text};
`

const sizes = css`
  height: ${({ theme }) => theme.components.radio.sizes.heights};
  width: ${({ theme }) => theme.components.radio.sizes.widths};
`

const FakeRadio = styled.span`
  ${border};
  ${colors};
  ${sizes};
  display: inline-block;
`

export default FakeRadio
