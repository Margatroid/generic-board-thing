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
  beforeEach(() => {
    fetch.resetMocks();
  });

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

  it('loads ideas again after creating a new idea', () => {
    const creationMockFetch = fetch.mockResponseOnce(JSON.stringify({}));
    const getAllIdeasMockFetch = fetch.mockResponseOnce(JSON.stringify([]));
    const expectedActions = [
      // Initial creation load
      { type: actions.LOAD_IDEAS },
      // Reload of ideas
      { type: actions.LOAD_IDEAS },
      // Successful reload of ideas
      { type: actions.LOAD_IDEAS_SUCCESS, ideas: [] }
    ];
    const store = mockStore({ ideas: [] });

    return store.dispatch(actions.newIdea()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      expect(creationMockFetch.mock.calls[0][0]).toMatch('/ideas');
      expect(creationMockFetch.mock.calls[0][1]).toEqual({ method: 'POST' });
    });
  });

  it('saves an idea', () => {
    const saveMockFetch = fetch.mockResponseOnce(JSON.stringify({}));
    const getAllIdeasMockFetch = fetch.mockResponseOnce(JSON.stringify([]));
    const expectedActions = [
      // Initial save spinner
      { type: actions.LOAD_IDEAS },
      // Reload of ideas
      { type: actions.LOAD_IDEAS },
      // Successful reload of ideas
      { type: actions.LOAD_IDEAS_SUCCESS, ideas: [] }
    ];
    const store = mockStore({ ideas: [] });
    const headers = { 'content-type': 'application/json' };

    return store
      .dispatch(actions.saveIdea(5, 'new title', 'new body'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        expect(saveMockFetch.mock.calls[0][0]).toMatch('/ideas/5');

        const expectedData = JSON.stringify({
          title: 'new title',
          body: 'new body'
        });
        expect(saveMockFetch.mock.calls[0][1]).toEqual({
          method: 'PUT',
          body: expectedData,
          headers
        });
      });
  });
});
