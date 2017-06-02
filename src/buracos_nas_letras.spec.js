'use strict';

import { expect } from 'chai';

import { count } from './buracos_nas_letras';

test('#count("Marcelo") should be equal 3', () => {
  const result = count('Marcelo');

  expect(result).to.equal(3);
});

test('#count("água") should be equal 3', () => {
  const result = count('água');

  expect(result).to.equal(3);
});
