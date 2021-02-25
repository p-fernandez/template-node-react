import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';

const getComponent = () => renderer.create(<App />);

describe('App', () => {
  test('Should render properly', () => {
    expect(getComponent()).toMatchSnapshot();
  })
});
