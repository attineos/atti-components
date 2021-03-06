/* This file was generated automatically, please do not write in it. */
import React from 'react'
import StyledProgressBar from '../styles/StyledProgressBar'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

const mock = () => {}

it('StyledProgressBar renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <StyledProgressBar></StyledProgressBar>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
