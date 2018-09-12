/* This file was generated automatically, please do not write in it. */
import React from 'react';
import Header3 from '..';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('Header3 renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <Header3 textAlign='center' ><div/></Header3>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    