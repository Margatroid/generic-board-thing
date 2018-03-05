import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as actions from './index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  it('should create an action with loaded ideas', () => {
    const ideas = [{ title: 'foo' }];
    const expected = { type: actions.LOAD_IDEAS_SUCCESS, ideas };

    expect(actions.loadIdeasSuccess(ideas)).toEqual(expected);
  });
});

describe('async actions', () => {
  it('creates LOAD_IDEAS_SUCCESS after successful fetch from service', () => {
    const ideas = [{ title: 'chocolate' }, { title: 'caramel' }];
    fetch.mockResponseOnce(JSON.stringify(ideas));

    const expectedActions = [
      { type: actions.LOAD_IDEAS },
      { type: actions.LOAD_IDEAS_SUCCESS, ideas: ideas }
    ];
    const store = mockStore({ ideas: [] });

    return store.dispatch(actions.loadIdeas()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
