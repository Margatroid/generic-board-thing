import reducer from './index';
import * as actions from '../actions';

describe('reducer', () => {
  describe('loading of all ideas', () => {
    it('will turn on loading state when initially loading', () => {
      expect(reducer({ loading: false }, { type: actions.LOAD_IDEAS })).toEqual(
        { loading: true }
      );
    });
  });

  describe('changing a tile', () => {
    it('will edit title and body', () => {
      const initialState = {
        ideas: [
          {
            title: 'old',
            id: 18,
            body: 'x'
          },
          {
            title: 'old2',
            id: 8
          }
        ]
      };

      const titleEditAction = actions.onTitleChange(8, 'new!');
      expect(reducer(initialState, titleEditAction).ideas[1].title).toEqual(
        'new!'
      );

      const bodyEditAction = actions.onBodyChange(18, 'wut');
      expect(reducer(initialState, bodyEditAction).ideas[0].body).toEqual(
        'wut'
      );
    });
  });

  describe('setting focus', () => {
    it('will set focus', () => {
      const initialState = { ideas: [{ id: 8 }] };
      const loadedIdeas = [{ id: 14 }, { id: 8 }];
      const newState = reducer(
        initialState,
        actions.loadIdeasSuccess(loadedIdeas, 8)
      );

      expect(newState.ideas[1].focus).toEqual(true);
    });
  });
});
