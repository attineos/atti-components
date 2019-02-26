/* This file was generated automatically, please do not write in it. */
import React from 'react';
import Header4 from '..';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('Header4 renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <Header4 textAlign={null} ><div/></Header4>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    