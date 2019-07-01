/* This file was generated automatically, please do not write in it. */
import React from 'react';
import HiddenInputCheckBox from '../styles/HiddenInputCheckBox';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('HiddenInputCheckBox renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <HiddenInputCheckBox ></HiddenInputCheckBox>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    