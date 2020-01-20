/* This file was generated automatically, please do not write in it. */
import React from 'react'
import StyledWeek from '../styles/StyledWeek'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

const mock = () => {}

it('StyledWeek renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <StyledWeek></StyledWeek>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
