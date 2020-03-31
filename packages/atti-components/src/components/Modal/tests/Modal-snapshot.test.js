/* This file was generated automatically, please do not write in it. */
import React from 'react'
import Modal from '..'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

const mock = () => {}

it('Modal renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <Modal className="Atticomponents" isOpened={true} onClose={mock} title="Atticomponents">
          Atticomponents
        </Modal>
      </Wrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
