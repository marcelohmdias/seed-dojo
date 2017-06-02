'use strict';

const holes = {
  A: 1,
  a: 1,
  B: 2,
  b: 1,
  D: 1,
  d: 1,
  e: 1,
  g: 1,
  O: 1,
  o: 1,
  P: 1,
  p: 1,
  Q: 1,
  q: 1,
  R: 1,
  '0': 1,
  '4': 1,
  '6': 1,
  '8': 2,
  '9': 1
};

const normalize = str => {
  return str
    .replace(/á|à|â|ã/, 'a')
    .replace(/Á|À|Â|Ã/, 'A')
    .replace(/é|ê|ẽ/, 'e')
    .replace(/ó|ô|õ/, 'o')
    .replace(/Ó|Ô|Õ/, 'O');
}

export const count = str => {
  const list = normalize(str).split('');
  return list.reduce((prev, curr) => prev + (holes[curr] || 0 ), 0);
};
