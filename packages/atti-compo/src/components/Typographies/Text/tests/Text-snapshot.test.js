/* This file was generated automatically, please do not write in it. */
import React from 'react';
import Text from '..';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('Text renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <Text textAlign={null} ><div/></Text>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    