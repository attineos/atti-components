/* This file was generated automatically, please do not write in it. */
import React from 'react'
import StyledTextArea from '../styles/StyledTextArea'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

const mock = () => {}

it('StyledTextArea renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <StyledTextArea></StyledTextArea>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
