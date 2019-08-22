/* This file was generated automatically, please do not write in it. */
import React from 'react'
import ContentContainer from '../styles/ContentContainer'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

const mock = () => {}

it('ContentContainer renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <ContentContainer></ContentContainer>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
