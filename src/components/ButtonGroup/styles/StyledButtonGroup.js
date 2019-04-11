import styled from 'styled-components'

import Button from '../../Button'

const StyledButtonGroup = styled.div`
  > ${Button}:first-child {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;

    border-right: ${({ theme }) => theme.components.inputGroup.borders.borderWidth} solid
      ${({ theme }) => theme.components.inputGroup.colors.border};
  }

  > ${Button}:last-child {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }

  > ${Button}:not(:first-child):not(:last-child) {
    border-radius: 0;

    border-right: ${({ theme }) => theme.components.inputGroup.borders.borderWidth} solid
      ${({ theme }) => theme.components.inputGroup.colors.border};
  }
`

export default StyledButtonGroup
