/* This file was generated automatically, please do not write in it. */
import React from 'react'
import Header2 from '..'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

const mock = () => {}

it('Header2 renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <Header2 textAlign={null}>
          <div />
        </Header2>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
