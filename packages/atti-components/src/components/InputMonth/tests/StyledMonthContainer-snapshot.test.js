/* This file was generated automatically, please do not write in it. */
import React from 'react'
import StyledMonthContainer from '../styles/StyledMonthContainer'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

const mock = () => {}

it('StyledMonthContainer renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <StyledMonthContainer></StyledMonthContainer>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
