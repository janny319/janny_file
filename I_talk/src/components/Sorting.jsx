import React, { useState } from 'react';

function Sorting({ dataLength }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('10');

    // 옵션들을 배열로 관리
    const options = ['10', '20', '50'];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className={`sorting ${dataLength || ''}`}>
            <div className={`drop-down ${isOpen ? 'on' : ''}`}>
                <button className="nomal" onClick={toggleDropdown}>
                    {selectedOption}
                </button>
                {isOpen && (
                    <ul className="list">
                        {options.map((option, index) => (
                            <li key={index} onClick={() => handleOptionClick(option)}>
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="txt-box">
                <em>52</em>개 중 <em>1-10</em> 항목
            </div>
        </div>
    );
}

export default Sorting;
