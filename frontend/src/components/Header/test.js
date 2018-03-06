import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

it('renders without crashing', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('nav').length).toEqual(1);
});

it('calls new idea callback when you press new idea', () => {
  const newIdeaCallback = jest.fn();
  const wrapper = shallow(<Header newIdea={newIdeaCallback} />);
  const newIdeaButton = wrapper.find('.button');

  expect(newIdeaCallback.mock.calls.length).toBe(0);
  expect(newIdeaButton.length).toEqual(1);

  newIdeaButton.simulate('click');
  expect(newIdeaCallback.mock.calls.length).toBe(1);
});
