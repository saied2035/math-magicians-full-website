import React from "react";
import renderer from 'react-test-renderer';

import App from '../../App'

it('Check all links are listed', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
})