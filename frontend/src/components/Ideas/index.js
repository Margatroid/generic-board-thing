import React from 'react';
import Idea from '../Idea';

const Ideas = ({ ideas, onTitleChange }) => {
  const ideaCards = ideas.map((idea, index) => {
    return (
      <Idea
        id={idea.id}
        onTitleChange={onTitleChange}
        key={index}
        title={idea.title}
      />
    );
  });

  return <div>{ideaCards}</div>;
};

export default Ideas;
