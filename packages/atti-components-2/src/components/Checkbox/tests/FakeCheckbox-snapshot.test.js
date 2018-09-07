/* This file was generated automatically, please do not write in it. */
import React from 'react';
import FakeCheckbox from '../styles/FakeCheckbox';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('FakeCheckbox renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <FakeCheckbox ></FakeCheckbox>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    