/* This file was generated automatically, please do not write in it. */
import React from 'react'
import TitleContainer from '../styles/TitleContainer'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

const mock = () => {}

it('TitleContainer renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <TitleContainer></TitleContainer>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
