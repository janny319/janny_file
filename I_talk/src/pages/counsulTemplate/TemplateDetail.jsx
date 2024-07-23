import React from 'react';
import { Link } from 'react-router-dom';

function TemplateDetail() {
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
                                <span className="center-txt">분류</span>
                                <p>기본 카테고리</p>
                            </div>
                            <div className="info-textbox">
                                <span className="center-txt">유형</span>
                                <p>텍스트형</p>
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
                        <div className="cont-detail">
                            [신한은행]<br/>
                            [발행일정 사전안내]<br/>
                            2023년 광역 서울사랑상품권 발행일정 사전 안내드리오니,<br/>
                            구매 계획 있으신 분께서는 참고하시기 바랍니다.<br/><br/>

                            ▶ 발행일자<br/>
                            - 2023.12.5(화)<br/>
                            ▶ 발행시간<br/>
                            - 10:00(출생연도 짝수)<br/>
                            - 14:00(출생연도 홀수)<br/><br/>

                            ▶ 할인율 : 상품권 액면가의 7%<br/>
                            ▶ 구매처 : 신한SOL, 신한 pLay, 서울Pay+, 티머니페이, 머니트리<br/>
                            ▶ 구매한도 : 월 30만원<br/>
                            ▶ 보유한도 : 100만원<br/>
                            ▶ 유효기간 : 상품권 발행일로부터 5년<br/>
                            ▶ 사용처 : 서울 전역 서울페이+ 가맹점<br/><br/>

                            ※ 본 메세지는 신한SOL 가입고객 대상으로 발송되었습니다.<br/>
                            ※ 신한은행은 서울사랑상품권 판매 대행역할만 수행합니다.<br/>
                            ※ 실제 구매 시 고객이 많이 몰리는 경우 최대 1분간 하얀 화면만 나타는 경우, 이 상태에서 조금만 대기하시면 순서대로 정상 진입이 가능합니다.<br/>
                            ※ 정책,조회,환불 등의 문의는 연결된 페이지의 공지사항 또는 서울페이 고객센터(1544-3737)를 통해 확인바랍니다.<br/>
                        </div>
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
        </div>
    );
}

export default TemplateDetail;
