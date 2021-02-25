'use strict';

function example(number, modifiedNumber) {
  console.log(`${number} -- ${arguments[0]}`);
  arguments[0] = modifiedNumber;
  console.log(`${number} -- ${arguments[0]}`);
  return `${number} -- ${arguments[0]}`;
}

function example2() {
  undeclaredVariable = 'Error';
}

module.exports = {
  example,
  example2,
};
