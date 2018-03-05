import React from 'react';
import Idea from '../Idea';

const Ideas = ({ ideas }) => {
  const ideaCards = ideas.map((idea, index) => {
    return <Idea key={index} title={idea.title} />;
  });

  return <div>{ideaCards}</div>;
};

export default Ideas;
