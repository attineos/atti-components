import styled from 'styled-components'

import getSpacesAsCss from 'helpers/generators/getSpacesAsCSS'

const StyledDay = styled.div`
  width: ${({ theme }) => theme.components.inputCalendar.day.width};

  flex-grow: 1;
  text-align: center;

  margin: ${({ theme }) => getSpacesAsCss(theme.components.inputCalendar.day.spaces, 'margin')};
  padding: ${({ theme }) => getSpacesAsCss(theme.components.inputCalendar.day.spaces, 'padding')};

  ${({ isSameMonth, theme }) =>
    !isSameMonth ? `color: ${theme.components.inputCalendar.colors.notSameMonth};` : ''}
  ${({ isSunday, theme }) =>
    isSunday ? `color: ${theme.components.inputCalendar.colors.sunday};` : ''}
  ${({ isToday, theme }) =>
    isToday ? `color: ${theme.components.inputCalendar.colors.today};` : ''}
  ${({ isSelected, theme }) =>
    isSelected ? `color: ${theme.components.inputCalendar.colors.selected};` : ''}

  cursor: pointer;
`

export default StyledDay
