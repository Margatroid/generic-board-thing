import React from 'react';
import './styles.css';

const Idea = ({ title }) => {
  return (
    <div className="box-wrapper">
      <div className="box">{title}</div>
    </div>
  );
};

export default Idea;
