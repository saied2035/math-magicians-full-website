import React from 'react';
import renderer from 'react-test-renderer';

import Quote from './Quote';

it('Rederer for Home page test', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
