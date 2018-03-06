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

describe('blurring an input', () => {
  it('will call the save prop', () => {
    const mockSave = jest.fn();
    const wrapper = shallow(<Idea save={mockSave} id={2} title="a" body="b" />);
    const inputs = wrapper.find('input');

    inputs.forEach((input, index) => {
      input.simulate('blur');
      expect(mockSave.mock.calls[index][0]).toBe(2);
      expect(mockSave.mock.calls[index][1]).toBe('a');
      expect(mockSave.mock.calls[index][2]).toBe('b');
    });
  });
});

describe('deleting', () => {
  it('will call the deleteIdea handler when delete button is clicked', () => {
    const mockHandler = jest.fn();
    const wrapper = shallow(<Idea deleteIdea={mockHandler} id={12} />);
    wrapper.find('.delete-button').simulate('click');

    expect(mockHandler.mock.calls[0][0]).toBe(12);
  });
});
