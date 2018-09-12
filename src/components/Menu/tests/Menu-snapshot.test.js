/* This file was generated automatically, please do not write in it. */
import React from 'react';
import Menu from '..';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('Menu renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <Menu values={[{}]} ></Menu>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    