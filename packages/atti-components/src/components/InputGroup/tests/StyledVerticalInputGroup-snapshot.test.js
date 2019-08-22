/* This file was generated automatically, please do not write in it. */
import React from 'react'
import StyledVerticalInputGroup from '../styles/StyledVerticalInputGroup'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

const mock = () => {}

it('StyledVerticalInputGroup renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <StyledVerticalInputGroup></StyledVerticalInputGroup>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
