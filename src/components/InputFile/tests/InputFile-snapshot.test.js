/* This file was generated automatically, please do not write in it. */
import React from 'react';
import InputFile from '..';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('InputFile renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <InputFile name="Atticomponents" placeholder="Atticomponents" onChange={mock} ></InputFile>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    