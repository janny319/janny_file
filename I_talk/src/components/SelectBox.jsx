import React, { useState } from 'react';
import '@/style/selectbox.scss';

function SelectBox({ selectClassName, options, title, disabled }) {
    const [value, setValue] = useState(title);
    const [selectedOption, setSelectedOption] = useState(false);

    const activeClassName = selectedOption ? ' on' : '';
    const disabledClassName = disabled ? ' disabled' : '';

    const toggleSelectBox = () => {
        if (!disabled) {
            setSelectedOption(!selectedOption);
        }
    };

    const selectOptionClick = (option) => {
        if (!disabled) {
            setValue(option);
            toggleSelectBox();
        }
    };

    return (
        <div className={`select ${selectClassName}${disabledClassName}`}>
            <div className={`drop-down ${activeClassName}`} onClick={toggleSelectBox}>
                <button className={`drop-down-btn${activeClassName}${disabledClassName}`} disabled={disabled}>
                    {value}
                </button>
                {/* 2024.06.10 위치 drop-down 태그 안으로 수정 */}
                {selectedOption && (
                    <ul className="list">
                        {options.map((option, index) => (
                            <li key={index} onClick={() => selectOptionClick(option)}>
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default SelectBox;
