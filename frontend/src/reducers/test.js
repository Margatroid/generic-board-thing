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

  describe('changing a title', () => {
    it('will edit a title', () => {
      const initialState = {
        ideas: [
          {
            title: 'old',
            id: 18
          },
          {
            title: 'old2',
            id: 8
          }
        ]
      };

      const newState = {
        ideas: [
          {
            title: 'old',
            id: 18
          },
          {
            title: 'new!',
            id: 8
          }
        ]
      };
      const action = { type: actions.ON_TITLE_CHANGE, id: 8, text: 'new!' };
      expect(reducer(initialState, action)).toEqual(newState);
    });
  });
});
