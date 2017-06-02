'use strict';

export const collatz = (num) => {

  let res = []

  res.push(num);

  while (num !== 1) {
    num = !(num % 2) ? num / 2 : 3 * num + 1;
    res.push(num);
  }

  return res;
};

export const exec = (num) => {

  let size;
  let count = 0;
  let value = num;

  while(!!num) {
    size = collatz(num);
    if (size.length > count) {
      count = size.length;
      value = num;
    }
    num--;
  }

  return `O valor ${value} possui ${count} sequências.`
};

