import React from 'react'
import { isEqual } from 'lodash'
import whyDidYouRender from '@welldone-software/why-did-you-render'
import { render } from '@testing-library/react'

import Toggle from '..'
import Wrapper from 'styleguide/Wrapper'

describe('Toggle snapshot unit', () => {
  let numberUpdates = 1

  beforeAll(() => {
    whyDidYouRender(React, {
      logOnDifferentValues: true,
      notifier: ({ prevState, nextState }) => {
        if (!isEqual(prevState, nextState)) {
          numberUpdates++
        }
      },
    })
  })

  const ToggleTestRender = () => {
    return (
      <Wrapper>
        <Toggle variant="disabled" click={false} sized="medium" checked={true} />
      </Wrapper>
    )
  }

  test('It should render Toggle', () => {
    const { asFragment } = render(<ToggleTestRender />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('It should render only once', () => {
    render(<ToggleTestRender />)
    expect(numberUpdates).toBe(1)
  })
})
