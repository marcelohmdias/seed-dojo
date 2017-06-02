'use strict';

import { expect } from 'chai';

import { collatz, exec } from './conjectura_collatz';

test('#collatz(13) should be equal [13, 40, 20, 10, 5, 16, 8, 4, 2, 1]', () => {
  const test = JSON.stringify([13, 40, 20, 10, 5, 16, 8, 4, 2, 1]);
  const result = JSON.stringify(collatz(13));

  expect(result).to.equal(test);
});

test('#exec(13) should be equal "O valor 13 possui 10 sequências."', () => {
  const test = 'O valor 9 possui 20 sequências.';
  const result = exec(13);

  expect(result).to.equal(test);
});
