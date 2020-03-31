/* This file was generated automatically, please do not write in it. */
import React from 'react'
import ChildrenContainer from '../styles/ChildrenContainer'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

const mock = () => {}

it('ChildrenContainer renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <ChildrenContainer></ChildrenContainer>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
