/* This file was generated automatically, please do not write in it. */
import React from 'react'
import Header1 from '..'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

const mock = () => {}

it('Header1 renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <Header1 textAlign={null}>
          <div />
        </Header1>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
