import React from 'react';

function CenterManagementTextBoxValidation({ id, onChange, title, placeholder, centerName, setValidation }) {
    return (
        // 240521 클래스 수정하고 태그수정함
        <div className="info-textbox">
            <span>
                {title}
                <i className="ico-check"></i>
            </span>
            <input id={id} onChange={onChange} value={centerName} type="text" placeholder={placeholder}></input>
        </div>
    );
}

export default CenterManagementTextBoxValidation;
