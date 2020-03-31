import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Toggle from '../index'
import Wrapper from 'styleguide/Wrapper'

test('it clicks once on the unchecked toggle', () => {
  const { getByRole } = render(
    <Wrapper>
      <Toggle />
    </Wrapper>,
  )

  const toggle = getByRole('checkbox')
  fireEvent.click(toggle)
  expect(toggle.checked).toBeTruthy()
})

test('it clicks once on the checked toggle', () => {
  const { getByRole } = render(
    <Wrapper>
      <Toggle checked={true} />
    </Wrapper>,
  )

  const toggle = getByRole('checkbox')
  fireEvent.click(toggle)
  expect(toggle.checked).toBeFalsy()
})

test('it clicks twice on the checked toggle', () => {
  const { getByRole } = render(
    <Wrapper>
      <Toggle checked={true} />
    </Wrapper>,
  )

  const toggle = getByRole('checkbox')
  fireEvent.click(toggle)
  fireEvent.click(toggle)
  expect(toggle.checked).toBeTruthy()
})

test('it clicks twice on the unchecked toggle', () => {
  const { getByRole } = render(
    <Wrapper>
      <Toggle />
    </Wrapper>,
  )

  const toggle = getByRole('checkbox')
  fireEvent.click(toggle)
  expect(toggle.checked).toBeTruthy()
})
