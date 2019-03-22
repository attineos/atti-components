import styled from 'styled-components'

const StyledHorizontalInputGroup = styled.div`
  > * {
    width: auto;
  }

  > *:first-child {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;

    border-right: none;
  }

  > *:last-child {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }

  > *:not(:first-child):not(:last-child) {
    border-radius: 0;

    border-right: none;
  }
`

export default StyledHorizontalInputGroup
