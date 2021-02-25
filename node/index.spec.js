'use strict';

const index = require('./index');

describe('Tests', () => {
  it('Default', () => {
    index();
    expect(1).toBe(1);
  });
});
