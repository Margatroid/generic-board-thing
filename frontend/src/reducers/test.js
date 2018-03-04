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
});
