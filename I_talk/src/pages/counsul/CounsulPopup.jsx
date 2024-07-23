import React, { useState } from 'react';
import TimeBox from '@/pages/counsul/TimeBox';
// import Alert from '@/components/Alert';
import CounselGraph from '@/pages/counsul/CounselGraph';
import CounsulTextBox from '@/pages/counsul/CounsulTextBox';
import CounsulTag from '@/pages/counsul/CounsulTag';
import PopUp from '@/components/PopUp';
import imgTBD from '@/assets/img/img_tbd.png';
import userDefault from '@/assets/icon/ico_chat_user_default.svg';

function CounsulPopup({ popOpen, setPopOpen, OpenedPopup, closePopup }) {
    // 오늘 날짜 구하기 + 요일
    var today = new Date();

    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    var dayOfWeek = today.getDay();
    var days = ['일', '월', '화', '수', '목', '금', '토'];
    var dayText = days[dayOfWeek];

    const details = [
        {
            title: '고객 정보',
            details: [
                { label: '고객 번호(이름)', value: '고객이름' },
                { label: '종료 유형', value: '상담사 종료', className: 'label-tag-counselor' },
                { label: '센터', value: '신규계약센터' },
                { label: '카테고리', value: '스마트폰' },
                { label: '유입채널', value: 'Web' },
            ],
        },
        {
            title: '상담사 정보',
            details: [
                { label: '상담사 이름', value: '이상담(myInfobankID)' },
                { label: '권한', value: '상담사' },
                { label: '이관여부', value: 'Y' },
                { label: '이전 상담사', value: '김바보' },
            ],
        },
    ];

    // 상담사 종료 , 시스템 종료 , 고객 종료 , 차단 종료 , 고객 종료 option 에 따라 달라짐
    const counselorEndType = details[0].details.find((detail) => detail.label === '종료 유형').value;

    return (
        <div>
            {popOpen ? (
                <>
                    <PopUp
                        title={'상담이력 상세'}
                        popOpen={popOpen}
                        setPopOpen={setPopOpen}
                        closePopup={closePopup}
                        OpenedPopup={OpenedPopup}
                    >
                        <div className="pop-cont">
                            <div className="detail-info">
                                {details.map((detail, index) => (
                                    <div className="detail-wrap" key={index}>
                                        <strong className="detail-tit">{detail.title}</strong>
                                        <div className="detail-option-wrap">
                                            {detail.details.map((label, idx) => (
                                                <div className="detail-option" key={idx}>
                                                    <span className="detail-txt">{label.label}</span>
                                                    <span
                                                        className={
                                                            label.value === '상담사 종료'
                                                                ? 'detail-con label-tag-counselor'
                                                                : label.value === '시스템 종료'
                                                                ? 'detail-con label-tag-system '
                                                                : label.value === '고객 종료'
                                                                ? 'detail-con label-tag-client'
                                                                : label.value === '차단 종료'
                                                                ? 'detail-con label-tag-block'
                                                                : label.value === '이관 종료'
                                                                ? 'detail-con label-tag-transfer'
                                                                : 'detail-con'
                                                        }
                                                    >
                                                        {label.value}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                                <div className="detail-input">
                                    <CounsulTextBox title={'상담원 의견'} placeholder={'500'} />
                                    <CounsulTextBox title={'상담 메모'} placeholder={'200'} />
                                    {(counselorEndType === '차단 종료' || counselorEndType === '이관 종료') && (
                                        <CounsulTextBox title={counselorEndType} placeholder={'200'} />
                                    )}
                                    <CounsulTag title={'상담 태그'} tags={['차단', '상품문의']} />
                                </div>
                            </div>
                            <div className="txt-detail">
                                <div className="detail-counseling-info">
                                    <strong className="talk-tit">상담정보</strong>
                                    <div className="counseling-box">
                                        <div className="counseling-tit">
                                            <span className="counseling-date">
                                                {year + '-' + month + '-' + day}({dayText})
                                            </span>
                                            <div className="time-wrap">
                                                <TimeBox option="대기시간" time="01분 41초" />
                                                <TimeBox option="진행시간" time="01분 41초" optionClass={'progress'} />
                                            </div>
                                        </div>
                                        <div className="counseling-con">
                                            <CounselGraph />
                                        </div>
                                    </div>
                                </div>
                                <div className="detail-box">
                                    <div className="txt-talk">
                                        <strong className="talk-tit">대화 이력</strong>
                                        <div className="talk-box">
                                            {/* 현재 채팅화면 */}
                                            <div className="chat-cont">
                                                <div className="date-division">
                                                    <span>24-02-20 화</span>
                                                </div>
                                                <div className="customer-chat">
                                                    <i className="customer-ico">
                                                        <img src={userDefault} alt="user 아이콘" />
                                                    </i>
                                                    <div className="speech">
                                                        <p>상품 가입</p>
                                                        <em>10:00</em>
                                                    </div>
                                                </div>
                                                <div className="my-chat">
                                                    <div className="speech">
                                                        <p>
                                                            1:1 상담을 문의하였습니다. 잠시 후 상담사를
                                                            연결해드리겠습니다.
                                                        </p>
                                                        <em>10:00</em>
                                                    </div>
                                                </div>
                                                <div className="my-chat">
                                                    <div className="speech">
                                                        <div>
                                                            <img src={imgTBD} alt="예시이미지" />
                                                        </div>
                                                        <em>10:00</em>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </PopUp>
                    {/* alert 예시로 만들어 놓음 */}
                </>
            ) : null}
        </div>
    );
}

export default CounsulPopup;
