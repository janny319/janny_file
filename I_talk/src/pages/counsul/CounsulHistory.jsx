import React, { useEffect, useRef, useState } from 'react';
import Tab from '@/components/Tab';
import TopSearch from '@/components/TopSearch';
import TestModal from '@/components/popup/TestModal';
import useModal from '@/hooks/useModal';
import Grid from '@/components/Grid';
import CounsulPopup from '@/pages/counsul/CounsulPopup';
import CounsulPagination from '@/pages/counsul/CounsulPagination';
import TopSelect from '@/components/TopSelect';
import Alert from '@/components/popup/Alert';
import DatePickerWithShortcuts from '@/components/Test';
import { CALENDER_TYPE } from '@/constants/common';

const title = '상담이력';

function CounsulHistory() {
    const { open } = useModal();

    const showModal = () => {
        open({
            content: <TestModal />,
            header: 'header',
            type: 'FullModal',
        });
    };

    const [popOpen, setPopOpen] = useState(false);
    const [alert, setAlert] = useState(false); // alert state add
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    // 각 드롭다운 메뉴에 대한 버튼 내용을 배열로 관리
    const dropdownButtonContents = [
        // 2024.06.07 센터 선택 -> 센터 수정
        { title: '센터', option: '전체' },
        { title: '카테고리', option: '전체' },
        { title: '유입채널', option: '전체' },
        { title: '검색조건', option: '상담사 이름' },
    ];

    // 각 드롭다운 메뉴에 대한 내용을 배열로 관리
    const dropdownContents = [
        ['센터 선택 1', '센터 선택 2', '센터 선택 3', '센터 선택 4'],
        ['카테고리 1', '카테고리 2', '카테고리 3', '카테고리 4'],
        ['유입채널 1', '유입채널 2', '유입채널 3', '유입채널 4'],
        ['검색조건 1', '검색조건 2', '검색조건 3', '검색조건 4'],
    ];

    const tabTitles = [
        { title: '전체', number: '00' },
        { title: '고객종료', number: '00' },
        { title: '상담사 종료', number: '00' },
        { title: '시스템 종료', number: '00' },
        { title: '이관 종료', number: '00' },
        { title: '차단 종료', number: '00' },
    ].map((tab, index) => ({ ...tab, index }));

    const [isOpen, setIsOpen] = useState([false, false, false, false]);
    const [isDropdownActive, setIsDropdownActive] = useState([false, false, false, false]);
    const [selectedItem, setSelectedItem] = useState(['', '', '', '']);
    const dropdownRefs = useRef(Array.from({ length: 4 }, () => React.createRef()));

    // 2024.06.12 useEffect 삭제
    // popup 열때 동작하는 함수
    const OpenedPopup = () => {
        setPopOpen(!popOpen);
    };

    // popup 닫을 때 동작하는 함수
    const closePopup = () => {
        // alert 창 만들때 추가해놓음
        // setAlert(!alert);
        console.log('popup open');
        setPopOpen(!popOpen);
    };

    const alertOpen = () => {
        setAlert(!alert);
    };

    // alert 닫을 때 동작하는 함수
    const closedAlert = () => {
        setAlert(!alert);
    };
    return (
        <div className="content">
            <div className="page-tit">
                <h3>{title}</h3>
                <span className="navi">
                    <em>
                        <i className="home"></i>
                    </em>
                    <em>{title}</em>
                </span>
            </div>
            <div className="search-wrap">
                {/* 2024.06.12 DatePickerWithShortcuts 추가 */}
                <DatePickerWithShortcuts type={CALENDER_TYPE.DAY} />
                <TopSelect
                    dropdownRefs={dropdownRefs}
                    dropdownButtonContents={dropdownButtonContents}
                    dropdownContents={dropdownContents}
                    isOpen={isOpen}
                    isDropdownActive={isDropdownActive}
                    setIsDropdownActive={setIsDropdownActive}
                    selectedItem={selectedItem}
                    setSelectedItem={setSelectedItem}
                    setIsOpen={setIsOpen}
                />
                {/* 2024.06.07 tit 추가 */}
                <TopSearch tit={'검색어 입력'} />
            </div>
            <div className="grid-wrap">
                <div className="right-btn">
                    <button className="btn small line ico gray down">Excel 다운로드</button>
                </div>
                <Tab tabTitles={tabTitles} handleTabClick={handleTabClick} activeTab={activeTab} />
                {/* 각 탭에 대한 내용 */}
                <div className="tab-cont">
                    {activeTab === 0 && (
                        <div>
                            <Grid popOpen={popOpen} setPopOpen={setPopOpen} OpenedPopup={OpenedPopup} />
                            <CounsulPagination />
                        </div>
                    )}
                    {activeTab === 1 && <div>내용2</div>}
                    {activeTab === 2 && <div>내용3</div>}
                    {activeTab === 3 && <div>내용4</div>}
                    {activeTab === 4 && <div>내용5</div>}
                    {activeTab === 5 && <div>내용6</div>}
                </div>
            </div>
            {/* 2024.07.22 TestModal 삭제 처리 */}
            {alert && (
                <>
                    <Alert
                        closedAlert={closedAlert}
                        txt={
                            '고객식별번호 대화를 보류 하시겠습니까? 보류 시, 자동종료가 되지 않습니다. 보류 상태에서 추가 상담진행 후, 종료처리 하세요.'
                        }
                    >
                        <div className="btn-list right">
                            <button className="btn line black" onClick={closedAlert}>
                                취소
                            </button>
                            <button className="btn bg black">차단해제</button>
                        </div>
                    </Alert>
                </>
            )}
            {popOpen && (
                <CounsulPopup
                    popOpen={popOpen}
                    setPopOpen={setPopOpen}
                    OpenedPopup={OpenedPopup}
                    closePopup={closePopup}
                />
            )}
        </div>
    );
}

export default CounsulHistory;
