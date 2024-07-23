import React from 'react';

function UserBlock({ closePopup, setBlockUser }) {
    const handleBlockUser = () => {
        closePopup(true);
        setBlockUser('isBlockUser');
    };

    return (
        <div>
            <div className="pop-content">
                <div className="input-box">
                    <span>고객번호</span>
                    <p>HJY166156</p>
                </div>
                <div className="input-box">
                    <span>고객 이름</span>
                    <p>김궁금</p>
                </div>
                <div className="input-box">
                    <span>고객 아이디</span>
                    <p>ghddbtls123</p>
                </div>
                <div className="input-box">
                    <span>고객 전화번호</span>
                    <p>010-1234-4564</p>
                </div>
                <hr />
                <div className="input-box column">
                    {/* 240531 column 추가 */}
                    <span>차단 사유</span>
                    <textarea placeholder="차단사유를 입력하세요." />
                </div>
            </div>
            <div className="btn-list right">
                <button type="button" className="btn bg white txt-black" onClick={closePopup}>
                    취소
                </button>
                <button type="button" className="btn bg black" onClick={handleBlockUser}>
                    등록
                </button>
            </div>
        </div>
    );
}

export default UserBlock;
