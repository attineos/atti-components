import styled, { css } from 'styled-components'
import Link from '../../Link'
import { Typography } from '../../Typographies'

const borders = css`
  border: ${({ theme, variant }) =>
    `${theme.components.alert.borders.size} solid ${theme.components.alert.colors.borders[variant]}`};
  border-radius: ${({ theme }) => theme.components.alert.borders.radius};
`

const spaces = css`
  padding: ${({ theme }) => theme.components.alert.spaces.padding};
`

const sizes = css`
  width: ${({ theme }) => theme.components.alert.sizes.width};
  height: ${({ theme }) => theme.components.alert.sizes.height};
  line-height: ${({ theme }) => theme.components.alert.sizes.lineHeight};
`

const colors = css`
  background-color: ${({ theme, variant }) => theme.components.alert.colors.background[variant]};
  ${Typography}, ${Link} {
    color: ${({ theme, variant }) => theme.components.alert.colors.text[variant]};
  }
`

const StyledDiv = styled('div')`
  ${borders}
  ${spaces}
  ${sizes}
  ${colors}
`

export default StyledDiv
