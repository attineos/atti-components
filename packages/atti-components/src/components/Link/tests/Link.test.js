import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Link from '../index'
import Wrapper from 'styleguide/Wrapper'

test('href functionnal', () => {
  const { getByText } = render(
    <Wrapper>
      <Link href="https://www.google.fr">This is a link</Link>
    </Wrapper>,
  )
  const link = getByText(/link/i)
  expect(link.href).toEqual('https://www.google.fr/')
})
