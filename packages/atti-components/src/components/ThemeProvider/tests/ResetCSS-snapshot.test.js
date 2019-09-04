/* This file was generated automatically, please do not write in it. */
import React from 'react'
import ResetCSS from '../styles/ResetCSS'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

const mock = () => {}

it('ResetCSS renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <ResetCSS></ResetCSS>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
