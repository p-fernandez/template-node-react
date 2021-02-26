'use strict';

const index = require('./index');

describe('Tests', () => {
  test('Default', () => {
    index();
    expect(1).toBe(1);
  });
});
