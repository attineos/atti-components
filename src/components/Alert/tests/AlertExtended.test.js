import React from 'react'
import styled from 'styled-components'
import Alert from '..'
import Wrapper from 'styleguide/Wrapper'
import renderer from 'react-test-renderer'

const AlertStyled = styled(Alert)`
  background-color: red;
`

it('should render an Alert with a red background', () => {
  const tree = renderer.create(
      <Wrapper>
        <Alert type="info">This is an Alert</Alert>
      </Wrapper>
      )
    .toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('background-color', 'red')
})
