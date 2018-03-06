export const LOAD_IDEAS = 'LOAD_IDEAS';
export const LOAD_IDEAS_SUCCESS = 'LOAD_IDEAS_SUCCESS';
export const ON_TITLE_CHANGE = 'ON_TITLE_CHANGE';
export const ON_BODY_CHANGE = 'ON_BODY_CHANGE';
export const START_LOADING = 'START_LOADING';

// Action creators
export function loadIdeas(focus = null) {
  return dispatch => {
    // Dispatch something here to start loading spinner.
    dispatch({ type: LOAD_IDEAS });

    return fetch('http://localhost:8000/ideas')
      .then(
        response => response.json(),
        error => console.error('Error:', error)
      )
      .then(json => dispatch(loadIdeasSuccess(json, focus)));
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
      .then(response => dispatch(loadIdeas(response.id)));
  };
}

export function deleteIdea(id) {
  return dispatch => {
    dispatch({ type: START_LOADING });

    return fetch(`http://localhost:8000/ideas/${id}`, { method: 'DELETE' })
      .then(response => response, error => console.error('Error:', error))
      .then(response => dispatch(loadIdeas()));
  };
}

export function saveIdea(id, title, body) {
  return dispatch => {
    dispatch({ type: START_LOADING });

    const requestBody = JSON.stringify({ title, body });
    const headers = { 'content-type': 'application/json' };

    return fetch(`http://localhost:8000/ideas/${id}`, {
      method: 'PUT',
      body: requestBody,
      headers
    })
      .then(
        response => response.json(),
        error => console.error('Error:', error)
      )
      .then(response => dispatch(loadIdeas()));
  };
}

export function onTitleChange(id, text) {
  return {
    type: ON_TITLE_CHANGE,
    field: 'title',
    id,
    text
  };
}

export function onBodyChange(id, text) {
  return {
    type: ON_BODY_CHANGE,
    field: 'body',
    id,
    text
  };
}

export function loadIdeasSuccess(ideas, focus = null) {
  return { type: LOAD_IDEAS_SUCCESS, ideas, focus };
}
