/* This file was generated automatically, please do not write in it. */
import React from 'react';
import LabelCheckbox from '../styles/LabelCheckbox';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('LabelCheckbox renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <LabelCheckbox ></LabelCheckbox>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    