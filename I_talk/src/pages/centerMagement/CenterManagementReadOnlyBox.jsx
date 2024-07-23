import React from 'react';

function CenterManagementReadOnlyBox({ title, data }) {
    return (
        //2024.05.17 readonly 클래스 추가
        //2024.05.21 불필요한 클래스 삭제
        <div className="info-textbox">
            <span>{title}</span>
            <p>{data}</p>
        </div>
    );
}

export default CenterManagementReadOnlyBox;
