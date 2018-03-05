import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

it('renders without crashing', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('div').length).toEqual(1);
});
