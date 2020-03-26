import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('renders the component', () => {
    const result = shallow(<App />).contains(<h2>Welcome to Play :)</h2>);
    expect(result).toBeTruthy();
  });
});
