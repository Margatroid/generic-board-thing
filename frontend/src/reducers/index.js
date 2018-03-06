import { LOAD_IDEAS, LOAD_IDEAS_SUCCESS, ON_TITLE_CHANGE } from '../actions';

const initialState = {
  ideas: [],
  loading: false
};

const ideasReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_IDEAS:
      return { ...state, loading: true };
    case LOAD_IDEAS_SUCCESS:
      return { ...state, ideas: action.ideas, loading: false };
    case ON_TITLE_CHANGE:
      const { id, text } = action;
      const ideas = state.ideas.map(idea => ({ ...idea }));
      const ideaIndex = state.ideas.findIndex(idea => idea.id === id);

      if (ideaIndex < 0) return state;
      ideas[ideaIndex].title = text;

      return { ...state, ideas };
    default:
      return state;
  }
};

export default ideasReducer;
