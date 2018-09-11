/* This file was generated automatically, please do not write in it. */
import React from 'react';
import ContainerRadio from '../styles/ContainerRadio';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('ContainerRadio renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <ContainerRadio ></ContainerRadio>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    