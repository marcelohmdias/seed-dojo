'use strict';

let list;

const exec = (model, char, size) => {

  if (model === '') return;

  for (let i = 0, len = model.length; i < len; i++) {

    let newStr = char + model.charAt(i);
    let text = model.substring(0, i) + model.substring(i + 1);

    if (newStr.length === size) list.push(newStr);

    exec(text, newStr, size);
  }

  return list;
};

export const anagrama = str => {
  list = [];
  return exec(str, '', str.length)
};
