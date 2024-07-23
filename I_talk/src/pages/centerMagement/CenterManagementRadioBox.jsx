import React from 'react';

function CenterManagementRadioBox({ radioID, name, title }) {
    return (
        <div className="radio-btn">
            {/* 240523 마크업 수정 */}
            <label htmlFor={radioID}>
                <input id={radioID} type="radio" name={name}></input>
                {title}
            </label>
            {/* 240523 마크업 수정 */}
        </div>
    );
}

export default CenterManagementRadioBox;
