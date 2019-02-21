import { createGlobalStyle } from 'styled-components'

const ResetCSS = createGlobalStyle`
  .atti-box * {
    box-sizing: border-box;
  }
  .atti-r-css {
    margin: 0;
    padding: 0;
    border: 0;
    box-shadow: none;
    outline: none;
  }
`

export default ResetCSS
