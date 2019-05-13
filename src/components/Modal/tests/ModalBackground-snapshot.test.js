/* This file was generated automatically, please do not write in it. */
import React from 'react';
import ModalBackground from '../styles/ModalBackground';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('ModalBackground renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <ModalBackground ></ModalBackground>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    