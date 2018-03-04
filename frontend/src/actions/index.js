export const LOAD_IDEAS = 'LOAD_IDEAS';
export const LOAD_IDEAS_SUCCESS = 'LOAD_IDEAS_SUCCESS';

// Action creators
export function loadIdeas() {
  return { type: LOAD_IDEAS };
}

export function loadIdeasSuccess(ideas) {
  return { type: LOAD_IDEAS_SUCCESS, ideas };
}
