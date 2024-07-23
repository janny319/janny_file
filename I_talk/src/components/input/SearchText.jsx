import React, { useState } from 'react';

const SearchText = ({ label, isSearch, ...restProps }) => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <div className={`border-box search-input ${isInputFocused ? 'active' : ''}`}>
      {label && <sub className="tit">{label}</sub>}
      <input type="text" onFocus={handleInputFocus} onBlur={handleInputBlur} {...restProps} />{' '}
    </div>
  );
};

export default SearchText;
