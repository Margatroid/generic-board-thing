import React from 'react';
import './styles.css';

const Idea = ({ title, id, onTitleChange }) => {
  const titleValue = title || '';
  const titleChangeHandler = event => {
    onTitleChange(id, event.target.value);
  };

  return (
    <div className="box-wrapper">
      <div className="box">
        <div className="field">
          <div className="control">
            <input
              name="title"
              onChange={titleChangeHandler}
              className="input"
              type="text"
              placeholder="Title"
              value={titleValue}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Idea;
