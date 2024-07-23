import SelectBox from '@/components/SelectBox';
import TopSelect from '@/components/TopSelect';
import React, { useRef, useState } from 'react';
import Tab from '@/components/Tab';
import Wating from '@/pages/monitoring/Wating';
import Ongoin from '@/pages/monitoring/Ongoin';
import CounsulCurrent from '@/pages/monitoring/CounsulCurrent';
import CategoryCurrent from '@/pages/monitoring/CategoryCurrent';
import ProcessStatus from '@/pages/monitoring/ProcessStatus';
import '@/style/operating.scss'; //2024.05.23 scss 경로 변경

function Monitoring() {
    const title = '모니터링';
    // 각 드롭다운 메뉴에 대한 버튼 내용을 배열로 관리
    const dropdownButtonContents = [
        { title: '센터', option: '전체' },
        { title: '카테고리', option: '이름' },
    ];

    // 각 드롭다운 메뉴에 대한 내용을 배열로 관리
    const dropdownContents = [
        ['센터 선택 1', '센터 선택 2', '센터 선택 3', '센터 선택 4'],
        ['카테고리 1', '카테고리 2', '카테고리 3', '카테고리 4'],
    ];

    const tabTitles = [
        { title: '대기중 (5)' },
        { title: '진행중 (5)' },
        { title: '상담사 현황' },
        { title: '센터/카테고리별 현황' },
        { title: '처리 현황' },
    ];
    const [activeTab, setActiveTab] = useState(0); // 현재 활성화된 탭을 관리하는 상태

    // 탭 버튼을 클릭했을 때 호출되는 함수
    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const [isOpen, setIsOpen] = useState([false, false]);
    const [isDropdownActive, setIsDropdownActive] = useState([false, false]);
    const [selectedItem, setSelectedItem] = useState(['', '', '', '']);
    const dropdownRefs = useRef(Array.from({ length: 2 }, () => React.createRef()));
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
                <i className="ico-bar"></i>
                <button className="btn bg black">조회</button>
                <div className="top-odd">
                    <dl>
                        <dt>센터</dt>
                        <dd>전체</dd>
                    </dl>
                    <dl>
                        <dt>카테고리</dt>
                        <dd>전체</dd>
                    </dl>
                    <dl>
                        <dt>기준 시간</dt>
                        <dd>2024-02-20 12:31:24</dd>
                    </dl>
                    <dl>
                        <dd>자동 새로고침</dd>
                    </dl>
                    <SelectBox selectClassName={'nomal'} title={'설정 안함'} options={['30초', '1분', '5분', '10분']} />
                    <button className="refresh"></button>
                </div>
            </div>
            <Tab tabTitles={tabTitles} handleTabClick={handleTabClick} activeTab={activeTab} />
            {/* 각 탭에 대한 내용 */}
            <div className="tab-cont">
                {activeTab === 0 && <Wating />}
                {activeTab === 1 && <Ongoin />}
                {activeTab === 2 && <CounsulCurrent />}
                {activeTab === 3 && <CategoryCurrent />}
                {activeTab === 4 && <ProcessStatus />}
            </div>
        </div>
    );
}

export default Monitoring;
