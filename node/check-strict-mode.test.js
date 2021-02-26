'use strict';

const {
  example,
  example2,
} = require('./check-strict-mode');

const testFail = () => {
  throw new Error('Should not reach here');
};

describe('Check Node.js strict mode', () => {
  test('Provided a value through an argument, if the argument is tried to have modified its reference, value should remain the same', () => {
    const number = 10;
    const modifiedNumber = 20;
    const expectation = `${number} -- ${modifiedNumber}`;

    expect(example(number, modifiedNumber)).toBe(expectation);
  });

  test('Undeclared variables throw a ReferenceError', () => {
    try {
      example2();
      testFail();
    } catch (error) {
      expect(error.name).toBe('ReferenceError');
    }
  });
});
