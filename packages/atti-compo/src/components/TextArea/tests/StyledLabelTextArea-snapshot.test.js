/* This file was generated automatically, please do not write in it. */
import React from 'react';
import StyledLabelTextArea from '../styles/StyledLabelTextArea';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('StyledLabelTextArea renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <StyledLabelTextArea ></StyledLabelTextArea>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    