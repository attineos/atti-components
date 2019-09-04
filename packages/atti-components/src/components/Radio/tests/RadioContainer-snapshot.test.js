/* This file was generated automatically, please do not write in it. */
import React from 'react'
import RadioContainer from '../styles/RadioContainer'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

const mock = () => {}

it('RadioContainer renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <RadioContainer></RadioContainer>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
