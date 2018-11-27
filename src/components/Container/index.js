import styled from 'styled-components'
import { join, map } from 'lodash'

import wrapMediaQuery from 'helpers/wrapMediaQuery'

// Iterate over the responsive spaces to apply the corresponding rules
const responsiveRules = (layout, spaces) => `
  max-width: ${layout.containerMaxWidth};
  padding: 0 ${spaces[layout.padding] || layout.padding};
`

// By default, Container is full-sized and center-aligned
const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  ${({ theme }) =>
    join(
      map(theme.layout, layout =>
        wrapMediaQuery(layout.from, layout.to, responsiveRules(layout, theme.spaces)),
      ),
      '',
    )};
`

/** @component */
export default Container
