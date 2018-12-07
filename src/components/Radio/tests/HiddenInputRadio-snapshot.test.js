/* This file was generated automatically, please do not write in it. */
import React from 'react';
import HiddenInputRadio from '../styles/HiddenInputRadio';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('HiddenInputRadio renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <HiddenInputRadio ></HiddenInputRadio>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    