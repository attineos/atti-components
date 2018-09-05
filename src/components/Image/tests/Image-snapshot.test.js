/* This file was generated automatically, please do not write in it. */
import React from 'react';
import Image from '..';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('Image renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <Image alt="Atticomponents" height="Atticomponents" src="Atticomponents" width="Atticomponents" ></Image>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    