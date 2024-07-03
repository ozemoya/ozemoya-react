import React from 'react';
import Headline from './Headline';
import Time from './Time';

const Taskbar = ({ headlines }) => {
  return (
    <span className="taskbar border-top">
      <div className="Start">
        <button className="start-button">
          <img src="images/windowstart.png" alt="Start" />
          <span>Start</span>
        </button>
      </div>
      <Time />
      <Headline headlines={headlines} />
    </span>
  );
};

export default Taskbar;