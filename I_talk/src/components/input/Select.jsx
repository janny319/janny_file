import React, { useEffect, useRef, useState } from 'react';

const Select = ({ label, options, value, handleChange, isCommon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRefs = useRef();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    handleChange(option);
  };

  const getLabelByValue = (value, array) => {
    if (value === '') return '전체';
    for (let item of array) {
      if (item.value === value) {
        return item.label;
      }
    }
    return null;
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRefs.current && !dropdownRefs.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRefs]);

  return (
    <div
      className={`drop-down ${isCommon && 'common-select-box'} ${isOpen ? 'on' : ''}`}
      ref={dropdownRefs}
    >
      {label ? (
        <button className="big" onClick={toggleDropdown}>
          <sub className="tit">{label}</sub>
          <span className="cont">{getLabelByValue(value, options)}</span>
        </button>
      ) : (
        <button className="nomal" onClick={toggleDropdown}>
          {getLabelByValue(value, options)}
        </button>
      )}

      {isOpen && (
        <ul className="list">
          <li onClick={() => handleOptionClick({ value: '', label: '전체' })}>전체</li>
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
