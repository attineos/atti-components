/* This file was generated automatically, please do not write in it. */
import React from 'react';
import Alert from '..';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('Alert renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <Alert className="Atticomponents" variance={null} ><div/></Alert>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    