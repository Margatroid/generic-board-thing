import { LOAD_IDEAS, LOAD_IDEAS_SUCCESS } from '../actions';

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
    default:
      return state;
  }
};

export default ideasReducer;
