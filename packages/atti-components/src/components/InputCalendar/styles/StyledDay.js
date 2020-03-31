import styled from 'styled-components'

import getSpacesAsCss from 'helpers/generators/getSpacesAsCSS'
import { Text } from '../../Typographies'

const getColor = (isSameMonth, isSunday, isToday, isSelected, theme) => `
  ${!isSameMonth ? `color: ${theme.notSameMonth};` : ''}
  ${isSunday ? `color: ${theme.sunday};` : ''}
  ${isToday ? `color: ${theme.today};` : ''}
  ${
    isSelected
      ? `
    color: ${theme.selected};
    background-color: ${theme.backgroundSelected};
    `
      : ''
  }
`

const StyledDay = styled(Text)`
  width: ${({ theme }) => theme.components.inputCalendar.day.width};
  height: ${({ theme }) => theme.components.inputCalendar.day.height};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-grow: 1;
  text-align: center;
  margin: ${({ theme }) => getSpacesAsCss(theme.components.inputCalendar.day.spaces, 'margin')};

  span {
    display: inline-flex;
    width: 25px;
    height: 25px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    ${({ isSameMonth, isSelected, isSunday, isToday, theme }) =>
      getColor(isSameMonth, isSunday, isToday, isSelected, theme.components.inputCalendar.colors)}
  }
`

export default StyledDay
