/* This file was generated automatically, please do not write in it. */
import React from 'react'
import RadioButton from '../styles/RadioButton'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

const mock = () => {}

it('RadioButton renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <RadioButton></RadioButton>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
