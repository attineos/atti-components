/* This file was generated automatically, please do not write in it. */
import React from 'react';
import InputStyle from '../styles/InputStyle';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('InputStyle renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <InputStyle ></InputStyle>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    