import React, { useEffect, useState } from 'react';
import '@/style/notice_detail.scss';
import { getNoticeDetailApi } from '@/api/operate/notice/index';
import dayjs from 'dayjs';
import { DEFAULT_YN } from '@/constants/common';

const NoticeDetail = ({ isDetail, setIsDetail }) => {
  const [detailInfo, setDetailInfo] = useState();
  const handlePrev = () => {
    setIsDetail(false);
  };

  const getNoticeList = async (params) => {
    const res = await getNoticeDetailApi(params);
    if (res.header.resultCode === 0) {
      setDetailInfo(res.data);
    }
  };

  useEffect(() => {
    isDetail && getNoticeList({ seq: isDetail });
  }, [isDetail]);

  return (
    <div className="detail-notice">
      <div className="notice-wrap">
        <button type="button" className="notice-back" onClick={handlePrev}></button>
        <div className="notice-box">
          <div className="notice-tit">
            <div className="notice-tit-top">
              <div className="notice-sub-wrap">
                <span className="notice-sub-tit">전체공지</span>
              </div>
              <div className="notice-sub-info">
                <div className="info-wrap">
                  <span className="info-tit">작성자 : </span>
                  <span className="info-cont">{detailInfo?.detail?.regUserName}</span>
                </div>
                <div className="info-wrap">
                  <span className="info-tit">등록일 : </span>
                  <span className="info-cont">
                    {dayjs(detailInfo?.detail?.regDate).format('YYYY-MM-DD')}
                  </span>
                </div>
                {detailInfo?.detail?.isCenter === DEFAULT_YN.YES && (
                  <div className="info-wrap">
                    <span className="info-tit">센터 : </span>
                    <span className="info-cont">{detailInfo?.detail?.centerName}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="notice-tit-btm">
              <strong className="tit"></strong>
            </div>
          </div>
          <div className="notice-con">
            <strong>{detailInfo?.detail?.title}</strong>
            <div className="notice-sub-wrap">
              <span className="info-tit">조회 : </span>
              <span className="info-cont">{detailInfo?.detail?.views}</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="notice-detail-con"
        dangerouslySetInnerHTML={{ __html: detailInfo?.detail?.content }}
      ></div>
    </div>
  );
};

export default NoticeDetail;
