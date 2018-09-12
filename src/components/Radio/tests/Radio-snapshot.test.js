/* This file was generated automatically, please do not write in it. */
import React from 'react';
import Radio from '..';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('Radio renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <Radio checked={true} id={"Atticomponents"} label={"Atticomponents"} name={"Atticomponents"} onChange={mock} value={"Atticomponents"} ></Radio>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    