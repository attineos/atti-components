/* This file was generated automatically, please do not write in it. */
import React from 'react'
import StyledDiv from '../styles/StyledDiv'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

const mock = () => {}

it('StyledDiv renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <StyledDiv></StyledDiv>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
