/* This file was generated automatically, please do not write in it. */
import React from 'react'
import ModalContainer from '../styles/ModalContainer'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

const mock = () => {}

it('ModalContainer renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <ModalContainer></ModalContainer>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
