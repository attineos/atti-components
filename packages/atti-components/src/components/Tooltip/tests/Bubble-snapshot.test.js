/* This file was generated automatically, please do not write in it. */
import React from 'react'
import Bubble from '../styles/Bubble'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

const mock = () => {}

it('Bubble renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <Bubble showTooltip={true} zIndex="Atticomponents"></Bubble>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
