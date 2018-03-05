import React from 'react';
import { shallow } from 'enzyme';
import Ideas from './index';

it('renders without crashing', () => {
  const wrapper = shallow(<Ideas ideas={[]} />);
  expect(wrapper.find('div').length).toEqual(1);
});
