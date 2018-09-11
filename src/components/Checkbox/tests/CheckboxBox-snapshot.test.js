/* This file was generated automatically, please do not write in it. */
import React from 'react';
import CheckboxBox from '../styles/CheckboxBox';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('CheckboxBox renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <CheckboxBox ></CheckboxBox>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    