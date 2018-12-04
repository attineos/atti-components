/* This file was generated automatically, please do not write in it. */
import React from 'react';
import CheckBox from '..';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('CheckBox renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <CheckBox checked={true} className="Atticomponents" id="Atticomponents" name="Atticomponents" onChange={mock} value="Atticomponents" ></CheckBox>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    