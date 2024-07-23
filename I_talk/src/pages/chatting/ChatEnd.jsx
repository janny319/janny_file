import React from 'react';

function ChatEnd({ closePopup, setBlockUser }) {
    const handleBlockUser = () => {
        closePopup(true);
        setBlockUser('isBlockUser');
    };

    return (
        <div>
            <div className="pop-content">
                <div className="input-box">
                    <span>종료 유형</span>
                    <p>이관종료</p>
                </div>
                <div className="input-box">
                    <span>담당 상담사</span>
                    <p>000</p>
                </div>
                <div className="input-box">
                    <span>상담 요청 시간</span>
                    <p>YY-MM-DD hh:mm:ss</p>
                </div>
                <div className="input-box">
                    <span>상담 시작 시간</span>
                    <p>YY-MM-DD hh:mm:ss</p>
                </div>
                <div className="input-box">
                    <span>상담 완료 시간</span>
                    <p>YY-MM-DD hh:mm:ss</p>
                </div>
                <hr />
                <div className="input-box column">
                    {/* 240531 column 추가 */}
                    <span>상담원 의견</span>
                    <textarea placeholder="차단사유를 입력하세요." value="고객님이 상품문의 하셔서 응답함" />
                </div>
                <div className="input-box">
                    <span>상담 태그</span>
                    <div className="tag-wrap">
                        <em className="tag">
                            차단<button className="delete"></button>
                        </em>
                        <em className="tag">
                            상품문의<button className="delete"></button>
                        </em>
                        <em className="tag">
                            좋아요<button className="delete"></button>
                        </em>
                    </div>
                </div>
            </div>
            <div className="btn-list right">
                <button type="button" className="btn bg white txt-black" onClick={closePopup}>
                    취소
                </button>
                <button type="button" className="btn bg black">
                    완료
                </button>
            </div>
        </div>
    );
}

export default ChatEnd;
