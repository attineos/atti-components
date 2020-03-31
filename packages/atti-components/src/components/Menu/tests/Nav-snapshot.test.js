/* This file was generated automatically, please do not write in it. */
import React from 'react'
import Nav from '../styles/Nav'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

const mock = () => {}

it('Nav renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <Nav></Nav>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
