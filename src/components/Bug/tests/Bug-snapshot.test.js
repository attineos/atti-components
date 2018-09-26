/* This file was generated automatically, please do not write in it. */
import React from 'react';
import Bug from '..';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('Bug renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <Bug >Atticomponents</Bug>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    