/* This file was generated automatically, please do not write in it. */
import React from 'react'
import StyledCalendarContainer from '../styles/StyledCalendarContainer'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

const mock = () => {}

it('StyledCalendarContainer renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <StyledCalendarContainer></StyledCalendarContainer>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
