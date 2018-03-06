import React from 'react';
import { shallow } from 'enzyme';
import Idea from './index';

it('renders without crashing', () => {
  const wrapper = shallow(<Idea />);
  expect(wrapper.find('.box-wrapper').length).toEqual(1);
});

describe('editing', () => {
  it('will call the onTitleChange handler when title is edited', () => {
    const mockHandler = jest.fn();
    const wrapper = shallow(<Idea onTitleChange={mockHandler} id={10} />);
    const title = wrapper.find('input[name="title"]');
    title.simulate('change', { target: { value: 'Hi' } });

    expect(mockHandler.mock.calls[0][0]).toBe(10);
    expect(mockHandler.mock.calls[0][1]).toBe('Hi');
  });

  it('will call the onBodyChange handler when body is edited', () => {
    const mockHandler = jest.fn();
    const wrapper = shallow(<Idea onBodyChange={mockHandler} id={11} />);
    const body = wrapper.find('textarea[name="body"]');
    body.simulate('change', { target: { value: 'Hello world' } });

    expect(mockHandler.mock.calls[0][0]).toBe(11);
    expect(mockHandler.mock.calls[0][1]).toBe('Hello world');
  });
});
