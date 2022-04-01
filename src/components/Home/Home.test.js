import React from 'react';
import renderer from 'react-test-renderer';

import Home from './Home';

it('Rendere to check navigation list', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
