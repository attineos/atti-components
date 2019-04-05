/* This file was generated automatically, please do not write in it. */
import React from 'react';
import Input from '..';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('Input renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <Input className="Atticomponents" id="Atticomponents" form={true} error={true} name="Atticomponents" onChange={mock} pattern="Atticomponents" placeholder="Atticomponents" size={42} type="Atticomponents" value="Atticomponents" warning={true} ></Input>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    