import React from 'react';

const Text = ({ isValidation, divClass, label, isReadOnly, readClass, ...rest }) => {
  return label ? (
    <div className={divClass}>
      <label htmlFor={rest.id}>
        <span className={isValidation ? `txt-validation` : 'txt'}>{label}</span>
      </label>
      {isReadOnly ? <span className={readClass}></span> : <input type="text" {...rest} />}
    </div>
  ) : (
    <input type="text" {...rest} />
  );
};

export default Text;
