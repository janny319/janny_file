import React, { useState } from 'react';
import PopUp from '@/components/PopUp';
import BoardPopup from '@/pages/common/BoardPopup';
import NoticeDetail from '@/pages/common/NoticeDetail';
import '@/style/notice_page.scss';

function BoardPage() {
    const [openNoticePopup, setOpenNoticePopup] = useState(false);
    const [openDetailPopup, setOpenDetailPopup] = useState(false);

    const openNotice = () => {
        setOpenNoticePopup(true);
    };

    const openDetail = () => {
        setOpenDetailPopup(true);
    };

    const closePopup = () => {
        setOpenNoticePopup(false);
        setOpenDetailPopup(false);
    };

    return (
        <div>
            <button className="notice-btn" onClick={openNotice}>
                공통 팝업(공지사항)
            </button>
            {openNoticePopup && (
                <PopUp title={'공지사항'} ClosedPopup={closePopup}>
                    <BoardPopup />
                </PopUp>
            )}
            <button className="notice-btn" onClick={openDetail}>
                공통 팝업(공지사항-상세)
            </button>
            {openDetailPopup && (
                <PopUp title={'공지사항'} ClosedPopup={closePopup}>
                    <NoticeDetail />
                </PopUp>
            )}
        </div>
    );
}

export default BoardPage;
