/* This file was generated automatically, please do not write in it. */
import React from 'react'
import StyledDay from '../styles/StyledDay'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

const mock = () => {}

it('StyledDay renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <StyledDay></StyledDay>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
