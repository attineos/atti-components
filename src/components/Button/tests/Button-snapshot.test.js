/* This file was generated automatically, please do not write in it. */
import React from 'react';
import Button from '..';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('Button renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <Button className="Atticomponents" onClick={mock} onPress={mock} title="Atticomponents" type="Atticomponents" >Atticomponents</Button>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    