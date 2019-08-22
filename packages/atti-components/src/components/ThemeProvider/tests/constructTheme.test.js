/* This file was generated automatically, please do not write in it. */
import React from 'react'
import constructTheme from '../helpers/constructTheme'

it('constructTheme generate correct base theme', () => {
  const baseTheme = {
    someVar: 'aaa',
    someNestedVar: { nestedVal: 'aaa' },
    factories: [],
  }
  const computedTheme = constructTheme({}, baseTheme)
  expect(computedTheme).toEqual(baseTheme)
  expect(computedTheme).not.toBe(baseTheme)
})

it('constructTheme generate correct base theme with factories', () => {
  const baseTheme = {
    someVar: 'aaa',
    someNestedVar: { nestedVal: 'aaa' },
    factories: [
      {
        factory: () => ({
          sameOtherVar: '42',
        }),
        name: 'components',
      },
    ],
  }
  const computedTheme = constructTheme({}, baseTheme)

  const expectedTheme = {
    someVar: 'aaa',
    someNestedVar: { nestedVal: 'aaa' },
    factories: baseTheme.factories,
    components: {
      sameOtherVar: '42',
    },
  }

  expect(computedTheme).toEqual(expectedTheme)
})

it('constructTheme te generate correct base theme with factories', () => {
  const baseTheme = {
    someVar: 'aaa',
    someVarB: 'bbb',
    someNestedVar: { nestedVal: 'aaa' },
    factories: [
      {
        factory: () => ({
          sameOtherVar: '42',
        }),
        name: 'components',
      },
    ],
  }
  const otherTheme = {
    someVarB: 'ccc',
    someNestedVar: { anotherNestedVal: 'bbb' },
    components: {
      sameOtherVar: '43',
    },
  }
  const computedTheme = constructTheme(otherTheme, baseTheme)

  const expectedTheme = {
    someVar: 'aaa',
    someVarB: 'ccc',
    someNestedVar: {
      nestedVal: 'aaa',
      anotherNestedVal: 'bbb',
    },
    factories: baseTheme.factories,
    components: {
      sameOtherVar: '43',
    },
  }

  expect(computedTheme).toEqual(expectedTheme)
})

it('constructTheme generate correct base theme with factories', () => {
  const baseTheme = {
    someVar: 'aaa',
    someVarB: 'bbb',
    factories: [
      {
        factory: theme => ({
          sameOtherVar: '42',
        }),
        name: 'components',
      },
    ],
  }
  const otherTheme = {
    someVarB: 'ccc',
    components: {
      sameOtherVar: '43',
    },
  }
  const computedTheme = constructTheme(otherTheme, baseTheme)

  const expectedTheme = {
    someVar: 'aaa',
    someVarB: 'ccc',
    factories: baseTheme.factories,
    components: {
      sameOtherVar: '43',
    },
  }

  expect(computedTheme).toEqual(expectedTheme)
})

it('constructTheme generate correct other theme with factories', () => {
  const baseTheme = {
    someVar: 'aaa',
    someVarB: 'bbb',
    factories: [
      {
        factory: theme => ({
          sameOtherVar: '42',
        }),
        name: 'components',
      },
    ],
  }
  const otherTheme = {
    someVarB: 'ccc',
    components: {
      sameOtherVar: '43',
    },
    factories: [
      {
        factory: theme => ({
          sameOtherVar: theme.someVarB + '44',
        }),
        name: 'components',
      },
    ],
  }
  const computedTheme = constructTheme(otherTheme, baseTheme)

  const expectedTheme = {
    someVar: 'aaa',
    someVarB: 'ccc',
    factories: baseTheme.factories,
    components: {
      sameOtherVar: 'ccc44',
    },
  }

  // ignore non serializable functions
  expect(JSON.stringify(computedTheme)).toEqual(JSON.stringify(expectedTheme))
})
