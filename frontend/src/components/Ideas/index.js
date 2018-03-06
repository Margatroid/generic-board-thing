import React from 'react';
import Idea from '../Idea';

const Ideas = ({ ideas, saveIdea, onTitleChange, onBodyChange }) => {
  const ideaCards = ideas.map((idea, index) => {
    return (
      <Idea
        id={idea.id}
        onTitleChange={onTitleChange}
        onBodyChange={onBodyChange}
        key={index}
        title={idea.title}
        body={idea.body}
        save={saveIdea}
      />
    );
  });

  return <div>{ideaCards}</div>;
};

export default Ideas;
