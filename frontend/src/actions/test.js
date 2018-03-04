import * as actions from './index';

describe('actions', () => {
  it('should create an action with loaded ideas', () => {
    const ideas = [{ title: 'foo' }];
    const expected = { type: actions.LOAD_IDEAS_SUCCESS, ideas };

    expect(actions.loadIdeasSuccess(ideas)).toEqual(expected);
  });
});
