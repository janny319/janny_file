import React from 'react';
import SelectBox from '@/components/SelectBox';

function TemplateAsign() {
    return (
        <div className="content">
            <div className="page-tit">
                <h3>
                    상담 템플릿 관리<span className="sub-tit">등록</span>
                </h3>
                <span className="navi">
                    <em>
                        <i className="home"></i>
                    </em>
                    <em>운영관리</em>
                    <em>상담 템플릿 관리</em>
                    <em>등록</em>
                </span>
            </div>
            <div className="noti-asign-wrap">
                <div className="noti-asign">
                    <div className="asign-wrap">
                        <div className="left-info">
                            <div className="info-textbox">
                                <span className="center-txt">분류</span>
                                {/* 2024.06.10 title, options 수정 */}
                                <SelectBox
                                    selectClassName={'nomal asign'}
                                    title={'분류를 선택하세요.'}
                                    options={['센터 선택 1', '센터 선택 2', '센터 선택 3', '센터 선택 4']}
                                />
                            </div>
                            <div className="info-textbox">
                                <span className="center-txt">유형​</span>
                                {/* 2024.06.10 title, options 수정 */}
                                <SelectBox
                                    selectClassName={'nomal asign'}
                                    title={'텍스트형'}
                                    options={['텍스트형', '혼합형(이미지+ 텍스트 +링크)']}
                                />
                            </div>
                            <div className="info-textbox top">
                                <span className="center-txt">템플릿 내용</span>
                                <textarea className="con-txt" placeholder="내용을 입력하세요."></textarea>
                            </div>
                            <span className="letter-num">
                                0<em className="total">/ 1,000</em>
                            </span>
                        </div>
                        <div className="right-info">
                            <p>미리보기</p>
                            <div className="pre-img"></div>
                        </div>
                    </div>
                </div>
                <div className="btn-list right">
                    <div className="noti-btn">
                        <button className="btn bg white txt-black black">취소</button>
                        <button className="btn bg  black">저장</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TemplateAsign;
