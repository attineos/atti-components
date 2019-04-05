import styled from 'styled-components'

const StyledVerticalInputGroup = styled.div`
  display: flex;
  flex-direction: column;

  > * {
    height: auto;
  }

  > *:first-child {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    border-bottom: none;
  }

  > *:last-child {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  > *:not(:first-child):not(:last-child) {
    border-radius: 0;

    border-bottom: none;
  }
`

export default StyledVerticalInputGroup
