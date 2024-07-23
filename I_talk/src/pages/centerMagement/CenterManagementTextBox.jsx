import React from 'react';

function CenterManagementTextBox({ title, placeholder, onChangeValue }) {
    return (
        // 240521 클래스 수정하고 태그수정함
        <div className="info-textbox">
            <span className="txt">
                {title}
                {/* <i className="ico-check"></i> - 240604 삭제 */}
            </span>
            <input id="number" onChange={onChangeValue} type="text" placeholder={placeholder}></input>
        </div>
    );
}

export default CenterManagementTextBox;
