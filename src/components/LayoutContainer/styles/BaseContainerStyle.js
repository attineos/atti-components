import styled from 'styled-components'

import { join, map } from 'lodash'

import wrapMediaQuery from 'helpers/wrapMediaQuery'

const BaseContainerStyle = styled.div`
  ${({ theme }) =>
    join(
      map(theme.layout, layout =>
        wrapMediaQuery(
          layout.from,
          layout.to,
          'maxWidth' in layout ? `max-width: ${layout.maxWidth}` : '',
        ),
      ),
      '',
    )};
`

export default BaseContainerStyle
