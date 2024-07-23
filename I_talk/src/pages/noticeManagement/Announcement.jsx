import React from 'react';
import { Link } from 'react-router-dom';

function Announcement() {
    const isDisabled = true; // 이전글이 없을 경우 disabled 클래스 추가
    return (
        <div className="content">
            <div className="page-tit">
                <h3>
                    공지사항 관리<span className="sub-tit">공지사항 상세</span>
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
                        <span className="center-txt">제목</span>
                        <strong>[공지] 서버 작업으로 인한 시스템 점검</strong>
                    </div>
                    <div className="info-column">
                        <div className="textbox-wrap">
                            <div className="info-textbox">
                                <span className="center-txt">작성자</span>
                                <p>홍권력</p>
                            </div>
                            <div className="info-textbox">
                                <span className="center-txt">유형</span>
                                <p>전체공지</p>
                            </div>
                        </div>
                        <div className="textbox-wrap">
                            <div className="info-textbox">
                                <span className="center-txt">작성일</span>
                                <p>YYYY-MM-DD</p>
                            </div>
                            <div className="info-textbox">
                                <span className="center-txt">조회수</span>
                                <p>0</p>
                            </div>
                        </div>
                    </div>

                    <div className="info-textbox top">
                        <span className="center-txt">내용</span>
                        <textarea className="noti-txt"></textarea>
                    </div>
                </div>
                <div className="btn-list both">
                    <div className="btn-left">
                        <button className="btn bg white txt-black black">목록</button>
                    </div>
                    <div className="noti-btn">
                        <button className="btn bg white txt-black black">삭제</button>
                        <button className="btn bg  black">수정</button>
                    </div>
                </div>
            </div>
            <div className="navi-link">
                <div className="pre-post">
                    <strong>이전글</strong>
                    <Link className={isDisabled ? 'disabled-link' : ''}>
                        <span>이전글이 없습니다.</span>
                    </Link>
                </div>
                <div className="next-post">
                    <strong>다음글</strong>
                    <Link>
                        <span>[보안] Windows 긴급 보안 업데이트</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Announcement;
