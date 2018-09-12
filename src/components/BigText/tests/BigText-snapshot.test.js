/* This file was generated automatically, please do not write in it. */
import React from 'react';
import BigText from '..';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('BigText renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <BigText textAlign='center' ><div/></BigText>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    