import React, { useState } from 'react';
import PopUp from '@/components/PopUp';
import BoardPopup from '@/pages/notice/BoardPopup';
import NoticeDetail from '@/pages/notice/NoticeDetail';
import '@/style/notice_page.scss';
import Alert from '@/components/popup/Alert';

function BoardPage() {
    const [openNoticePopup, setOpenNoticePopup] = useState(false);
    const [openDetailPopup, setOpenDetailPopup] = useState(false);
    // const [alert, setAlert] = useState(false); // alert state add

    const openNotice = () => {
        setOpenNoticePopup(true);
    };

    const openDetail = () => {
        setOpenDetailPopup(true);
    };

    const closePopup = () => {
        setOpenNoticePopup(false);
        setOpenDetailPopup(false);
        // setAlert(false);
        setCenterDisabled(false);
    };

    const alertBtn = () => {
        setAlert(true);
    };

    // alert 닫을 때 동작하는 함수
    // const closedAlert = () => {
    //     setAlert(true);
    // };

    // alert, popup 둘다 닫을 때 동작하는 함수
    // const closedAlert = () => {
    //     setAlert(!alert);
    //     OpenedPopup();
    // };

    return (
        <div>
            <button className="notice-btn" onClick={openNotice}>
                공통 팝업(공지사항)
            </button>
            {openNoticePopup && (
                <PopUp title={'공지사항'} closePopup={closePopup}>
                    <BoardPopup />
                </PopUp>
            )}
            <button className="notice-btn" onClick={openDetail}>
                공통 팝업(공지사항-상세)
            </button>
            {openDetailPopup && (
                <PopUp title={'공지사항'} closePopup={closePopup}>
                    <NoticeDetail />
                </PopUp>
            )}

            {/* <button className="notice-btn" onClick={alertBtn}>
                alert
            </button>
            {alert && (
                <>
                    alert 사용할 경우 예시
										 <Alert
                        closedAlert={closedAlert}
                        txt={
                            '고객식별번호 대화를 보류 하시겠습니까? 보류 시, 자동종료가 되지 않습니다. 보류 상태에서 추가 상담진행 후, 종료처리 하세요.'
                        }
                        btnOne={'취소'}
                        btnTwo={'종료'}
                    ></Alert>
                    <PopUp closePopup={closePopup} alertClassName={'alert-wrap'}>
                        <p className="alert-txt">
                            수정사항이 저장되지 않았습니다.
                            <br /> 이 페이지를 나가시겠습니까?
                        </p>
                        <div className="alert-btn-wrap">
                            <button className="alert-btn" onClick={closedAlert}>
                                취소
                            </button>
                            <button className="alert-btn gray" onClick={closePopup}>
                                종료
                            </button>
                        </div>
                    </PopUp>
                </>
            )} */}
        </div>
    );
}

export default BoardPage;
