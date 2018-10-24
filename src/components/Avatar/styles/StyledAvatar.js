import styled, { css } from 'styled-components'
import avatarColors from '../../../theme/colors'
import avatarSize from '../../../helpers/StyleHelper/StyleHelper'
import { sumChars } from '../../../helpers/StringHelper/StringHelper'

const handleBackground = ({ props }) => {
  let avatarBackground
  if (props.color) {
    avatarBackground = css`
      background-color: ${props.color};
    `
  } else if (props.name) {
    // pick a deterministic color from the colors list
    const i = sumChars(props.name) % avatarColors.avatarColors.length
    const background = avatarColors.avatarColors[i]
    avatarBackground = css`
      background-color: ${background};
    `
  } else {
    avatarBackground = css`
      background-image: url('https://image.flaticon.com/icons/svg/149/149071.svg');
    `
  }
  return avatarBackground
}

const border = css`
  border-radius: ${({ theme }) => theme.components.avatar.border.radius};
`

const colors = css`
  color: ${({ theme }) => theme.components.avatar.colors.text};
`
const fonts = css`
  font-family: ${({ theme }) => theme.components.avatar.fonts.fontFamily};
  text-align: center;
`

const StyledAvatar = styled.div`
  ${props => handleBackground({ props })};
  ${props => avatarSize({ props })};
  ${border};
  ${colors};
  ${fonts};
`

export default StyledAvatar
