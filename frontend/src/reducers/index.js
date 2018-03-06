import {
  LOAD_IDEAS,
  LOAD_IDEAS_SUCCESS,
  ON_TITLE_CHANGE,
  ON_BODY_CHANGE,
  START_LOADING,
  IDEA_MOUSE_ENTER,
  IDEA_MOUSE_LEAVE
} from '../actions';

const initialState = {
  ideas: [],
  loading: false
};

const ideaEdit = (state, action) => {
  const { id, text } = action;
  const ideas = state.ideas.map(idea => ({ ...idea }));
  const ideaIndex = state.ideas.findIndex(idea => idea.id === id);

  if (ideaIndex < 0) return state;
  ideas[ideaIndex][action.field] = text;

  return { ...state, ideas };
};

const loadIdeasSuccess = (state, action) => {
  const { focus, ideas } = action;
  if (focus) {
    const ideaIndex = ideas.findIndex(idea => idea.id === focus);
    ideas[ideaIndex].focus = true;
  }
  return { ...state, ideas, loading: false };
};

const ideaHover = (state, action) => {
  let ideas = state.ideas.map(idea => ({ ...idea }));
  ideas = ideas.map(idea => {
    idea.hover = action.id === idea.id && action.entering;
    return idea;
  });
  return { ...state, ideas };
};

const ideasReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_IDEAS:
    case START_LOADING:
      return { ...state, loading: true };
    case LOAD_IDEAS_SUCCESS:
      return loadIdeasSuccess(state, action);
    case IDEA_MOUSE_ENTER:
    case IDEA_MOUSE_LEAVE:
      return ideaHover(state, action);
    case ON_TITLE_CHANGE:
    case ON_BODY_CHANGE:
      return ideaEdit(state, action);
    default:
      return state;
  }
};

export default ideasReducer;
