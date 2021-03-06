import React from 'react';
import Idea from '../Idea';

const Ideas = ({
  ideas,
  saveIdea,
  deleteIdea,
  onTitleChange,
  onBodyChange,
  ideaMouseEnter,
  ideaMouseLeave
}) => {
  const ideaCards = ideas.map((idea, index) => {
    return (
      <Idea
        id={idea.id}
        onTitleChange={onTitleChange}
        onBodyChange={onBodyChange}
        key={index}
        title={idea.title}
        body={idea.body}
        focus={idea.focus}
        saveIdea={saveIdea}
        deleteIdea={deleteIdea}
        mouseEnter={ideaMouseEnter}
        mouseLeave={ideaMouseLeave}
        hovering={idea.hover}
      />
    );
  });

  return <div>{ideaCards}</div>;
};

export default Ideas;
