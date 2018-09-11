/* This file was generated automatically, please do not write in it. */
import React from 'react';
import Checkbox from '..';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('Checkbox renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <Checkbox checked={true} id="Atticomponents" label="Atticomponents" name="Atticomponents" onChange={mock} style={{}} value="Atticomponents" ></Checkbox>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    