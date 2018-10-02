/* This file was generated automatically, please do not write in it. */
import React from 'react';
import StyledProgressbar from '../styles/StyledProgressbar';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('StyledProgressbar renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <StyledProgressbar ></StyledProgressbar>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    