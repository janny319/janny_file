import React from 'react';

const TimeBox = ({ option, time, optionClass }) => {
  return (
    <div className={`time-box ${optionClass}`}>
      <span className="time-option">{option}</span>
      <span className="time">{time}</span>
    </div>
  );
};

export default TimeBox;
