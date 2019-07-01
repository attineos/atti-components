/* This file was generated automatically, please do not write in it. */
import React from 'react';
import variances from '../styles/variances';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('variances renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <variances ></variances>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    