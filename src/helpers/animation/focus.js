import { css } from 'styled-components'

const focus = css`
  &:focus {
    background-color: ${({ theme }) => theme.components.button.colors.focus};
  }
`

export { focus }
