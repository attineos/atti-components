/* This file was generated automatically, please do not write in it. */
import React from 'react';
import BaseContainerStyle from '../styles/BaseContainerStyle';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('BaseContainerStyle renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <BaseContainerStyle ></BaseContainerStyle>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    