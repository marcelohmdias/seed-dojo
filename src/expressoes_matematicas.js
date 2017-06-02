'use strict';

const run = {
  '-': (a, b) => a - b,
  '+': (a, b) => a + b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b
}


const exec = (num1, operator, num2) => {
  return run[operator](+num1, +num2)
}

const calc = str => {
  let list = str.replace(/\ /g, '').split('');
  return exec.apply(null, list);
}

console.log(calc('1 + 2'));
console.log(calc('3 - 2'));
console.log(calc('2 * 2'));
console.log(calc('4 / 2'));
