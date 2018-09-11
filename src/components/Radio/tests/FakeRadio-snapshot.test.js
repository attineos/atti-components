/* This file was generated automatically, please do not write in it. */
import React from 'react';
import FakeRadio from '../styles/FakeRadio';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('FakeRadio renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <FakeRadio ></FakeRadio>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    