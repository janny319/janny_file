import React from 'react';
import { Link } from 'react-router-dom';

function TemplateDetailMixed() {
    const isDisabled = true; // 이전글이 없을 경우 disabled 클래스 추가
    return (
        <div className="content">
            <div className="page-tit">
                <h3>
                    상담 템플릿 관리<span className="sub-tit">상세</span>
                </h3>
                <span className="navi">
                    <em>
                        <i className="home"></i>
                    </em>
                    <em>운영관리</em>
                    <em>상담 템플릿 관리</em>
                    <em>상세</em>
                </span>
            </div>
            <div className="noti-asign-wrap">
                <div className="noti-asign">
                    <div className="info-column">
                        <div className="textbox-wrap">
                            <div className="info-textbox">
                                {/* 2024.06.10 center-txt , p 텍스트 수정 */}
                                <span className="center-txt">분류</span>
                                <p>기본 카테고리</p>
                            </div>
                            <div className="info-textbox">
                                <span className="center-txt">유형</span>
                                <p>혼합형</p>
                            </div>
                        </div>
                        <div className="textbox-wrap">
                            <div className="info-textbox">
                                <span className="center-txt">작성자(ID)</span>
                                <p>홍매니(id)</p>
                            </div>
                            <div className="info-textbox">
                                <span className="center-txt">등록일</span>
                                <p>2024-02-20</p>
                            </div>
                        </div>
                    </div>

                    <div className="info-textbox top">
                        <span className="center-txt">템플릿 내용</span>
                        <div className="right-info">
                            <p>미리보기</p>
                            <div className="pre-img">
                                <img alt="img test"></img>
                                <p>test</p>
                                <button className="pre-btn">바로가기</button>
                                <button className="pre-btn">바로가기</button>
                                <button className="pre-btn">바로가기</button>
                                <button className="pre-btn">바로가기</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn-list both">
                    <div className="btn-left">
                        <button className="btn bg white txt-black black">목록</button>
                    </div>
                    <div className="noti-btn">
                        <button className="btn bg white txt-black black">공유 템플릿으로 등록</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TemplateDetailMixed;
