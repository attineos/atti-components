/* This file was generated automatically, please do not write in it. */
import React from 'react';
import StyledOptionPanel from '../styles/StyledOptionPanel';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('StyledOptionPanel renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <StyledOptionPanel ></StyledOptionPanel>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    