/* This file was generated automatically, please do not write in it. */
import React from 'react';
import CheckBoxBoxContainer from '../styles/CheckBoxBoxContainer';
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer';

const mock = () => {}

it('CheckBoxBoxContainer renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <CheckBoxBoxContainer ></CheckBoxBoxContainer>
      </Wrapper>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
    