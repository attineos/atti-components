/* This file was generated automatically, please do not write in it. */
import React from 'react'
import CurrentElement from '../styles/CurrentElement'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

it('should render CurrentElement correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <CurrentElement></CurrentElement>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
