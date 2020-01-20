/* This file was generated automatically, please do not write in it. */
import React from 'react'
import StyledTimeContainer from '../styles/StyledTimeContainer'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

const mock = () => {}

it('StyledTimeContainer renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <StyledTimeContainer></StyledTimeContainer>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
