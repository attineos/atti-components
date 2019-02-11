/* This file was generated automatically, please do not write in it. */
import React from 'react';
import Select from '..';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('Select renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <Select className="Atticomponents" id="Atticomponents" isMulti={true} name="Atticomponents" onChange={mock} options={new Array()} size={42} sort={null} value="Atticomponents" defaultValue="Atticomponents" ></Select>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    