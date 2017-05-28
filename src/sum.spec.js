'use strict';

import { expect } from 'chai';

import { sum } from './sum';

test('#sum(1,2) should return 3', () => {
  expect(sum(1,2)).to.be.equals(3)
})

test('#sum(2,2) should return an error', () => {
  expect(sum(2,2)).to.be.not.equals(3)
})
