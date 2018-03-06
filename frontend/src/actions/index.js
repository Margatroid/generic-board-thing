export const LOAD_IDEAS = 'LOAD_IDEAS';
export const LOAD_IDEAS_SUCCESS = 'LOAD_IDEAS_SUCCESS';

// Action creators
export function loadIdeas() {
  return dispatch => {
    // Dispatch something here to start loading spinner.
    dispatch({ type: LOAD_IDEAS });

    return fetch('http://localhost:8000/ideas')
      .then(
        response => response.json(),
        error => console.error('Error:', error)
      )
      .then(json => dispatch(loadIdeasSuccess(json)));
  };
}

export function newIdea() {
  return dispatch => {
    // Dispatch something here to start loading spinner.
    dispatch({ type: LOAD_IDEAS });

    return fetch('http://localhost:8000/ideas', { method: 'POST' })
      .then(
        response => response.json(),
        error => console.error('Error:', error)
      )
      .then(dispatch(loadIdeas()));
  };
}

export function loadIdeasSuccess(ideas) {
  return { type: LOAD_IDEAS_SUCCESS, ideas };
}
