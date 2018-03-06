import React from 'react';
import './styles.css';

const CHARACTER_LIMIT = 140;

const Idea = ({
  title,
  id,
  body,
  saveIdea,
  onBodyChange,
  onTitleChange,
  deleteIdea
}) => {
  const titleValue = title || '';
  const titleChangeHandler = event => {
    onTitleChange(id, event.target.value);
  };

  const bodyValue = body || '';
  const bodyChangeHandler = event => {
    if (event.target.value.length > CHARACTER_LIMIT) return;
    onBodyChange(id, event.target.value);
  };

  const onBlurHandler = () => {
    saveIdea(id, title, body);
  };

  const onDeleteHandler = () => {
    deleteIdea(id);
  };

  const count = body && body.length;
  const characterCountDisplay =
    count > 125 ? (
      <span className="idea__character-count">{`${count}/${CHARACTER_LIMIT}`}</span>
    ) : (
      ''
    );

  return (
    <div className="box-wrapper idea">
      <div className="box">
        <div className="field">
          <div className="control">
            <input
              name="title"
              onBlur={onBlurHandler}
              onChange={titleChangeHandler}
              className="input idea__input idea__input--title"
              type="text"
              placeholder="Title"
              value={titleValue}
            />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <textarea
              name="body"
              onBlur={onBlurHandler}
              className="textarea idea__input"
              placeholder="Your idea"
              value={bodyValue}
              onChange={bodyChangeHandler}
            />
          </div>
        </div>

        <div className="field is-grouped">
          <p className="control is-expanded">{characterCountDisplay}</p>
          <p className="control">
            <a
              className="button is-link is-danger delete-button"
              onClick={onDeleteHandler}
            >
              <span className="icon">
                <i className="fas fa-trash" />
              </span>
              <span>Delete</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Idea;
