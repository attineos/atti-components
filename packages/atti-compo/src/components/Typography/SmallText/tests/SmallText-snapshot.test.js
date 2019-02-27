/* This file was generated automatically, please do not write in it. */
import React from 'react';
import SmallText from '..';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('SmallText renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <SmallText textAlign={null} ><div/></SmallText>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    