import React from 'react';

function KnowledgeDetail() {
    return (
        <div className="content">
            <div className="page-tit">
                <h3>
                    지식 관리<span className="sub-tit">지식 상세</span>
                </h3>
                <span className="navi">
                    <em>
                        <i className="home"></i>
                    </em>
                    <em>지식 관리</em>
                    <em>지식 상세</em>
                </span>
            </div>
            <div className="noti-asign-wrap">
                <div className="noti-asign">
                    <div className="info-column">
                        <div className="textbox-wrap" style={{ minWidth: '519px' }}>
                            <div className="info-textbox">
                                <span className="center-txt">그룹</span>
                                <p>장기저축급여​</p>
                            </div>
                            <div className="info-textbox">
                                <span className="center-txt">분류</span>
                                <p>장기저축급여 분할급여금 신청 안내​</p>
                            </div>
                        </div>
                        <div className="textbox-wrap">
                            <div className="info-textbox">
                                <span className="center-txt">공개여부</span>
                                <div className="radio-btn">
                                    <label htmlFor="radio01">
                                        <input id="radio01" type="radio" name="authority" />Y
                                    </label>
                                </div>
                                <div className="radio-btn">
                                    <label htmlFor="radio02">
                                        <input id="radio02" type="radio" name="authority" />N
                                    </label>
                                </div>
                            </div>
                            <div className="info-textbox">
                                <span className="center-txt">자주찾는지식 등록</span>
                                <div className="radio-btn">
                                    <label htmlFor="radio03">
                                        <input id="radio03" type="radio" name="authority1" />Y
                                    </label>
                                </div>
                                <div className="radio-btn">
                                    <label htmlFor="radio04">
                                        <input id="radio04" type="radio" name="authority1" />N
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="textbox-wrap">
                            <div className="info-textbox">
                                <span className="center-txt">등록</span>
                                <p>2024-02-20</p>
                            </div>
                            <div className="info-textbox">
                                <span className="center-txt">수정</span>
                                <p>2024-02-20</p>
                            </div>
                        </div>
                        <div className="textbox-wrap">
                            <div className="info-textbox">
                                <span className="center-txt">최근 작성자</span>
                                <p>홍길동</p>
                            </div>
                            <div className="info-textbox">
                                <span className="center-txt">조회수</span>
                                <p>0</p>
                            </div>
                        </div>
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
                <div className="btn-list both">
                    <div className="btn-left">
                        <button className="btn bg white txt-black black">목록</button>
                        <button className="btn bg white txt-black black">삭제</button>
                    </div>
                    <div className="noti-btn">
                        <button className="btn bg white txt-black black">미리보기</button>
                        <button className="btn bg  black">저장</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KnowledgeDetail;
