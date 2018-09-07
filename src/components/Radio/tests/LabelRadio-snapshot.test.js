/* This file was generated automatically, please do not write in it. */
import React from 'react';
import LabelRadio from '../styles/LabelRadio';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('LabelRadio renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <LabelRadio ></LabelRadio>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    