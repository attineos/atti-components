/* This file was generated automatically, please do not write in it. */
import React from 'react';
import Label from '..';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('Label renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <Label textAlign={null} htmlFor="Atticomponents" disabled={true} ><div/></Label>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    