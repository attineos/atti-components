/* This file was generated automatically, please do not write in it. */
import React from 'react'
import StyledImage from '../styles/StyledImage'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

const mock = () => {}

it('StyledImage renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <StyledImage></StyledImage>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
