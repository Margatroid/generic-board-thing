import React from 'react';
import { shallow } from 'enzyme';
import Idea from './index';

it('renders without crashing', () => {
  const wrapper = shallow(<Idea />);
  expect(wrapper.find('div').length).toEqual(1);
});
