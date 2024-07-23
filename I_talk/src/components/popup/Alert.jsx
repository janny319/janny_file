import React from 'react';
import popClose from '@/assets/icon/ico_pop_close.svg';

function Alert({ txt, closedAlert, children }) {
    return (
        <>
            <div className="alert dimd"></div>
            <div className="alert">
                <button className="btn-close" onClick={closedAlert}>
                    <img src={popClose} alt="닫기" />
                </button>
                <p className="txt">{txt}</p>
                {/* 버튼 기능에 따라 달라질수 있어서 따로 빼놓음 */}
                {children}
            </div>
        </>
    );
}

export default Alert;
