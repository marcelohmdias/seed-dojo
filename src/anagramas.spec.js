'use strict';

import { expect } from 'chai';

import { anagrama } from './anagramas';

test('#anagrama("sol") should be equal list', () => {
  const result = anagrama('sol');
  const mock = ['sol', 'slo', 'osl', 'ols', 'lso', 'los'];
  console.log(JSON.stringify(result))
  expect(JSON.stringify(result)).to.equal(JSON.stringify(mock));
});

test('#anagrama("sol") length should be equal 6', () => {
  const result = anagrama('sol');

  expect(result.length).to.equal(6);
});
