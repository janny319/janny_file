import SelectBox from '@/components/SelectBox';
import React, { useState } from 'react';

function NoticeAssign() {
    const [state, setState] = useState(false);
    const selectBoxShow = () => {
        setState(true);
    };
    const selectBoxHidden = () => {
        setState(false);
    };
    return (
        <div className="content">
            <div className="page-tit">
                <h3>
                    공지사항 관리<span className="sub-tit">등록</span>
                </h3>
                <span className="navi">
                    <em>
                        <i className="home"></i>
                    </em>
                    <em>공지사항 관리</em>
                </span>
            </div>
            <div className="noti-asign-wrap">
                <div className="noti-asign">
                    <div className="info-textbox">
                        <span className="center-txt">유형</span>
                        <div className="radio-btn" onClick={selectBoxHidden}>
                            <label htmlFor="radio01">
                                <input id="radio01" type="radio" name="authority" />
                                전체공지
                            </label>
                        </div>
                        <div className="radio-btn" onClick={selectBoxShow}>
                            <label htmlFor="radio02">
                                <input id="radio02" type="radio" name="authority" />
                                센터공지
                            </label>
                        </div>
                        {state && (
                            // 2024.06.10 title 수정
                            <SelectBox
                                selectClassName={'small noti'}
                                title={'센터를 선택하세요.'}
                                options={['센터 선택 1', '센터 선택 2', '센터 선택 3', '센터 선택 4']}
                            />
                        )}
                    </div>
                    <div className="info-textbox">
                        <span className="center-txt">제목</span>
                        <input type="text" placeholder="제목을 입력해주세요."></input>
                    </div>
                    <div className="info-textbox top">
                        <span className="center-txt">내용</span>
                        <div className="quill"></div>
                    </div>
                </div>
                <div className="btn-list right">
                    <button className="btn bg white txt-black black">취소</button>
                    <button className="btn bg  black">등록</button>
                </div>
            </div>
        </div>
    );
}

export default NoticeAssign;
