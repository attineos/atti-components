import styled from "styled-components"

const PreviewContainer = styled("div")`
  border: ${({ theme }) =>
    `${theme.borders.widths.bw1} solid ${theme.colors.lighterGrey}`};
  border-radius: ${({ theme }) => theme.borders.radius.medium};
  padding: ${({ theme }) => theme.spaces.s2};
`

export default PreviewContainer
