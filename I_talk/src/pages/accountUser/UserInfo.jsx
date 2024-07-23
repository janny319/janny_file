import React, { useState } from 'react';
import Count from '@/components/Count';

function UserInfo() {
    // 매니저 권한으로 진입할 경우 뜨는 팝업
    return (
        <div>
            <div className="pop-content">
                <div className="input-box colum">
                    <span>아이디</span>
                    <p>cat1</p>
                </div>
                <div className="input-box">
                    <span>이름</span>
                    <p>아이롬 PC</p>
                </div>
                <div className="input-box">
                    <span>권한</span>
                    <p>매니저</p>
                </div>
                <div className="input-box">
                    <span>휴대폰번호</span>
                    <p>000-0000-0000</p>
                </div>
                <div className="input-box">
                    <span>센터</span>
                    <p>신규계약센터</p>
                </div>
                <div className="input-box">
                    <span>팀</span>
                    <p>계약1팀</p>
                </div>
                <div className="input-box">
                    <span>최대 상담수</span>
                    <Count />
                </div>
                <div className="input-box">
                    <span>등록일</span>
                    <p>2024-01-02</p>
                </div>
                <div className="input-box">
                    <span>계정상태</span>
                    <p>정상</p>
                </div>
            </div>
            <div className="btn-list right">
                <button type="button" className="btn bg white txt-black">
                    취소
                </button>
                <button type="button" className="btn bg black">
                    저장
                </button>
            </div>
        </div>
    );
}

export default UserInfo;
