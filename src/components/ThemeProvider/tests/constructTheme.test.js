/* This file was generated automatically, please do not write in it. */
import React from 'react';
import constructTheme from '../helpers/constructTheme';

it('constructTheme te generate correct base theme', () => {
  const baseTheme = {
    someVar: 'aaa',
    factories: [],
  }
  const computedTheme =  constructTheme({}, baseTheme)
  expect(computedTheme).toMatchObject(baseTheme)
});


it('constructTheme te generate correct base theme with factories', () => {
  const baseTheme = {
    someVar: 'aaa',
    factories: [{
      factory: () => ({
        sameOtherVar: '42',
      }),
      name: 'components'
    }],
  }
  const computedTheme =  constructTheme({}, baseTheme)

  const expectedTheme = {
    someVar: 'aaa',
    factories: baseTheme.factories,
    components: {
      sameOtherVar: '42',
    }
  }

  expect(computedTheme).toMatchObject(expectedTheme)
});

it('constructTheme te generate correct base theme with factories', () => {
  const baseTheme = {
    someVar: 'aaa',
    someVarB: 'bbb',
    factories: [{
      factory: () => ({
        sameOtherVar: '42',
      }),
      name: 'components'
    }],
  }
  const otherTheme = {
    someVarB: 'ccc',
    components: {
      sameOtherVar: '43'
    }
  }
  const computedTheme =  constructTheme(otherTheme, baseTheme)

  const expectedTheme = {
    someVar: 'aaa',
    someVarB: 'ccc',
    factories: baseTheme.factories,
    components: {
      sameOtherVar: '43',
    }
  }

  expect(computedTheme).toMatchObject(expectedTheme)
});
    