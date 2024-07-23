import React from 'react';
import '@/style/notice_detail.scss';

function NoticeDetail() {
    return (
        <div className="detail-notice">
            <div className="notice-wrap">
                <button type="button" className="notice-back"></button>
                <div className="notice-box">
                    <div className="notice-tit">
                        <div className="notice-tit-top">
                            <div className="notice-sub-wrap">
                                <span className="notice-sub-tit">전체공지</span>
                            </div>
                            <div className="notice-sub-info">
                                <div className="info-wrap">
                                    <span className="info-tit">작성자 : </span>
                                    <span className="info-cont">김관리</span>
                                </div>
                                <div className="info-wrap">
                                    <span className="info-tit">등록일 : </span>
                                    <span className="info-cont">YYYY-MM-DD</span>
                                </div>
                            </div>
                        </div>
                        <div className="notice-tit-btm">
                            <strong className="tit"></strong>
                        </div>
                    </div>
                    <div className="notice-con">
                        <strong>[공지] 서버 작업으로 인한 시스템 점검</strong>
                        <div className="notice-sub-wrap">
                            <span className="info-tit">조회 : </span>
                            <span className="info-cont">0</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="notice-detail-con"></div>
        </div>
    );
}

export default NoticeDetail;
