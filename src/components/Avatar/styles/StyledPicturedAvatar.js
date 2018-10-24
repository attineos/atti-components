import styled, { css } from 'styled-components'
import avatarSize from '../../../helpers/StyleHelper/StyleHelper'

const border = css`
  border-radius: ${({ theme }) => theme.components.avatar.border.radius};
`

const StyledPicturedAvatar = styled.img`
  ${props => avatarSize({ props })};
  ${border};
`

export default StyledPicturedAvatar
