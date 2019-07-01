/* This file was generated automatically, please do not write in it. */
import React from 'react';
import TextArea from '..';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('TextArea renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <TextArea className="Atticomponents" id="Atticomponents" name="Atticomponents" onChange={mock} placeholder="Atticomponents" ></TextArea>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    