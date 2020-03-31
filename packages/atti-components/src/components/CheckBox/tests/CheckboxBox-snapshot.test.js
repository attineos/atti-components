/* This file was generated automatically, please do not write in it. */
import React from 'react'
import CheckBoxBox from '../styles/CheckBoxBox'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

const mock = () => {}

it('CheckBoxBox renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <CheckBoxBox></CheckBoxBox>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
