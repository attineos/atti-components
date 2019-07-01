import styled, { css } from 'styled-components'
import { SmallText } from '../../Typographies'

const messageThemeStyle = ({ theme }) => {
  const { borders = {}, colors = {}, spaces = {} } = theme.components.tooltip

  return css`
    background-color: ${colors.background};
    border-radius: ${borders.radius};
    color: ${colors.text};
    padding: ${spaces.padding};
  `
}

const Message = styled(SmallText)`
  display: inline-block;
  margin: 0;
  text-align: center;
  ${messageThemeStyle};
`

export default Message
