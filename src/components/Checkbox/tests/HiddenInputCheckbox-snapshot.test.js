/* This file was generated automatically, please do not write in it. */
import React from 'react';
import HiddenInputCheckbox from '../styles/HiddenInputCheckbox';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('HiddenInputCheckbox renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <HiddenInputCheckbox ></HiddenInputCheckbox>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    