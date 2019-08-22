/* This file was generated automatically, please do not write in it. */
import React from 'react'
import StyledContainer from '../styles/StyledContainer'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

const mock = () => {}

it('StyledContainer renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <StyledContainer></StyledContainer>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
