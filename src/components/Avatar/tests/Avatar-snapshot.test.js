/* This file was generated automatically, please do not write in it. */
import React from 'react';
import Avatar from '..';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('Avatar renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <Avatar color="Atticomponents" name="Atticomponents" size="Atticomponents" src="Atticomponents" ></Avatar>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    