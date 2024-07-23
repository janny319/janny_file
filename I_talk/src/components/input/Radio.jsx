import React from 'react';

const Radio = ({ option }) => {
  return option.map((item, idx) => {
    return (
      <div className="radio-btn" key={idx}>
        <input id={item.id} type="radio" name={item.name}></input>
        <label htmlFor={item.id}>{item.label}</label>
      </div>
    );
  });
};

export default Radio;
