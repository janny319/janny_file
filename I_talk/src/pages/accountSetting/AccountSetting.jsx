import React, { useState } from 'react';
import '@/style/setting.scss';
import SelectBox from '@/components/SelectBox';
import Count from '@/components/Count';

function AccountSetting(props) {
    const title = ['운영관리', '계정관리', '설정'];
    const lastTitle = title[title.length - 1];

    // 추가: 상태 관리
    const [initialPassword, setInitialPassword] = useState('고양이');
    const [adminEmail, setAdminEmail] = useState('italkadmin@italk.com');
    const [adminContact, setAdminContact] = useState('01000000000');

    return (
        <div className="content">
            <div className="page-tit">
                {/* 2024.05.21 classNmae 수정 */}
                <h3>
                    계정관리<span className="sub-tit">{lastTitle}</span>
                </h3>
                <span className="navi">
                    <em>
                        <i className="home"></i>
                    </em>
                    {title.map((element, index) => (
                        <em key={index}>{element}</em>
                    ))}
                </span>
            </div>
            <div className="acount-setting border-box">
                <div className="info-textbox">
                    <span className="center-txt">계정 잠금 횟수</span>
                    <Count />
                </div>
                <div className="info-textbox">
                    <span className="center-txt">비밀번호 변경주기</span>
                    <SelectBox selectClassName={'acc-sel'} title={'90일'} options={['90일', '60일', '30일']} />
                </div>
                <div className="info-textbox">
                    <span className="center-txt">비밀번호 강제 변경 여부</span>
                    {/* 240523 마크업 변경 */}
                    <div className="radio-btn">
                        <label htmlFor="radio01">
                            <input id="radio01" type="radio" name="authority" />
                            필수
                        </label>
                    </div>
                    <div className="radio-btn">
                        <label htmlFor="radio02">
                            <input id="radio02" type="radio" name="authority" />
                            선택
                        </label>
                    </div>
                    {/* 240523 마크업 변경 */}
                </div>
                <div className="info-textbox">
                    <span className="center-txt">초기 비밀번호</span>
                    {/* 240523 마크업 변경 */}
                    <div className="radio-btn">
                        <label htmlFor="radio03">
                            <input id="radio03" type="radio" name="authority" />
                            아이디와 동일
                        </label>
                    </div>
                    <div className="radio-btn">
                        <label htmlFor="radio04">
                            <input id="radio04" type="radio" name="authority" />
                            직접입력
                        </label>
                    </div>
                    {/* 240523 마크업 변경 */}
                    <input
                        type="text"
                        placeholder=""
                        value={initialPassword}
                        onChange={(e) => setInitialPassword(e.target.value)} // 24.05.20 onChange 추가
                    />
                </div>
                <div className="info-textbox">
                    <span className="center-txt">관리자 이메일</span>
                    <input
                        type="text"
                        placeholder=""
                        value={adminEmail}
                        onChange={(e) => setAdminEmail(e.target.value)} // 24.05.20 onChange 추가
                    />
                </div>
                <div className="info-textbox">
                    <span className="center-txt">관리자 연락처</span>
                    <input
                        type="text"
                        placeholder=""
                        value={adminContact}
                        onChange={(e) => setAdminContact(e.target.value)} // 24.05.20 onChange 추가
                    />
                </div>
                <div className="info-textbox">
                    <span className="center-txt">신규 계정 최대 상담수 기본값</span>
                    <Count />
                </div>
                <div className="btn-list right">
                    <button className="btn bg white txt-black big">수정사항 초기화</button>
                    <button className="btn bg black big">저장</button>
                </div>
            </div>
        </div>
    );
}

export default AccountSetting;
