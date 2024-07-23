import React from 'react';
import TopSelect from '@/components/TopSelect';
import { useRef, useState } from 'react';
import Tab from '@/components/Tab';
import '@/style/operating.scss';
import Calendar from '@/components/Calendar';
import CounsulPagination from '@/pages/counsul/CounsulPagination';
import TopSearch from '@/components/TopSearch';
import PieGraph from '@/components/chart/PieGraph';
import DatePickerWithShortcuts from '@/components/Test';
import { CALENDER_TYPE } from '@/constants/common';

const tabData = [
    {
        day: '신규계약센터',
        request: '계약 1팀',
        connection: '홍유신(id)',
        end: '30건',
        clientEnd: '30건',
        systemEnd: '30건',
        transferEnd: '30건',
        blockingEnd: '30건',
        processing: '30:00',
        failed: '24:00',
        leave: '21:00',
    },
    {
        day: '신규계약센터 일이삼사오육칠팔구십',
        request: '계약 1팀',
        connection: '홍유신(id)',
        end: '30건',
        clientEnd: '30건',
        systemEnd: '30건',
        transferEnd: '30건',
        blockingEnd: '30건',
        processing: '30:00',
        failed: '24:00',
        leave: '21:00',
    },
    {
        day: '신규계약센터 일이삼사오육칠팔구십',
        request: '계약 1팀',
        connection: '홍유신(id)',
        end: '30건',
        clientEnd: '30건',
        systemEnd: '30건',
        transferEnd: '30건',
        blockingEnd: '30건',
        processing: '30:00',
        failed: '24:00',
        leave: '21:00',
    },
    {
        day: '신규계약센터 일이삼사오육칠팔구십',
        request: '계약 1팀',
        connection: '홍유신(id)',
        end: '30건',
        clientEnd: '30건',
        systemEnd: '30건',
        transferEnd: '30건',
        blockingEnd: '30건',
        processing: '30:00',
        failed: '24:00',
        leave: '21:00',
    },
    {
        day: '신규계약센터 일이삼사오육칠팔구십',
        request: '계약 1팀',
        connection: '홍유신(id)',
        end: '30건',
        clientEnd: '30건',
        systemEnd: '30건',
        transferEnd: '30건',
        blockingEnd: '30건',
        processing: '30:00',
        failed: '24:00',
        leave: '21:00',
    },
    {
        day: '신규계약센터 일이삼사오육칠팔구십',
        request: '계약 1팀',
        connection: '홍유신(id)',
        end: '30건',
        clientEnd: '30건',
        systemEnd: '30건',
        transferEnd: '30건',
        blockingEnd: '30건',
        processing: '30:00',
        failed: '24:00',
        leave: '21:00',
    },
    {
        day: '신규계약센터 일이삼사오육칠팔구십',
        request: '계약 1팀',
        connection: '홍유신(id)',
        end: '30건',
        clientEnd: '30건',
        systemEnd: '30건',
        transferEnd: '30건',
        blockingEnd: '30건',
        processing: '30:00',
        failed: '24:00',
        leave: '21:00',
    },
];

function CounsulStatist() {
    const [isOpen, setIsOpen] = useState([false, false]);
    const [isDropdownActive, setIsDropdownActive] = useState([false, false]);
    const [selectedItem, setSelectedItem] = useState(['', '', '', '']);
    const dropdownRefs = useRef(Array.from({ length: 2 }, () => React.createRef()));

    // 2024.07.23 수정
    const [activeButton, setActiveButton] = useState({
        entryTime: 0,
        waitingTime: 0,
        progressTime: 0,
    });

    // 240531 date.length 따라서 selectbox -> list height 조절
    const dataLength = tabData.length > 6 ? 'reduction' : '';

    const tabCounsulState = [
        { title: '전체', number: '2,033' },
        { title: '매니저', number: '2,000' },
        { title: '상담사', number: '33' },
    ].map((tab, index) => ({ ...tab, index }));

    //상담현황 tab관련
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    // 각 드롭다운 메뉴에 대한 버튼 내용을 배열로 관리
    // 2024.06.07 하나 삭제 , 카테고리 -> 팀 수정
    const dropdownButtonContents = [
        { title: '센터', option: '전체' },
        { title: '팀', option: '이름' },
    ];

    // 각 드롭다운 메뉴에 대한 내용을 배열로 관리
    const dropdownContents = [
        ['센터 선택 1', '센터 선택 2', '센터 선택 3', '센터 선택 4'],
        ['카테고리 1', '카테고리 2', '카테고리 3', '카테고리 4'],
    ];

    // 센터/카테고리 차트 관련
    const center = [
        { name: 'maxWidth100', value: 400 },
        { name: '대기 실패', value: 300 },
        { name: '대기 중 이탈', value: 300 },
        { name: '운영시간외인입', value: 200 },
    ];
    const centerLabel = [
        { key: 'maxWidth100' },
        { key: '대기 실패' },
        { key: '대기 중 이탈' },
        { key: '운영시간외인입' },
    ];

    const center1 = [
        { name: '상담사 종료', value: 400 },
        { name: '고객 종료', value: 300 },
        { name: '시스템 종료', value: 300 },
        { name: '이관 종료', value: 200 },
        { name: '차단 종료 ', value: 200 },
    ];
    const center1Label = [
        { key: '상담사 종료' },
        { key: '고객 종료' },
        { key: '시스템 종료' },
        { key: '이관 종료' },
        { key: '차단 종료 ' },
    ];

    const indicators1 = [
        { label: '1인당 평균처리', value: '30건' },
        { label: '평균 첫 응대시간', value: '30분 20초' },
    ];
    const indicators2 = [
        { label: '평균 응답시간', value: '30분 20초' },
        { label: '평균 상담시간', value: '30분 20초' },
    ];

    {/* 2024.07.23 수정 */}
    const toggleActiveButton = (buttonName) => {
        setActiveButton((prevState) => ({
            ...prevState,
            [buttonName]: (prevState[buttonName] + 1) % 3,
        }));
    };

    {/* 2024.07.23 추가 */}
    const getButtonClass = (buttonName) => {
        switch (activeButton[buttonName]) {
            case 1:
                return 'order-filter up';
            case 2:
                return 'order-filter down';
            default:
                return 'order-filter default';
        }
    };

    return (
        <div className="content">
            <div className="page-tit">
                <h3>상담사별 통계</h3>
                <span className="navi">
                    <em>
                        <i className="home"></i>
                    </em>
                    <em>상담통계</em>
                    <em>상담사별 통계</em>
                </span>
            </div>
            <div className="tab-cont statist">
                <div className="statist-cont">
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
                        <TopSearch tit={'상담사 이름'} />
                        <div className="top-odd">
                            <dl>
                                <dt>센터</dt>
                                <dd>일이삼사오육칠팔구십일이삼사오육칠팔구십</dd>
                            </dl>
                            <dl>
                                <dt>조회 기간</dt>
                                <dd className="no-short">2024-02-20 ~ 2024-02-20</dd>
                            </dl>
                        </div>
                    </div>
                    <div className="indicator-wrap">
                        <div className="tit-wrap">
                            <h4>주요 통계 지표</h4>
                            <div className="counselor-state">
                                <dl className="all">
                                    <dt>상담 요청</dt>
                                    <dd>1,000건</dd>
                                </dl>
                                <ul className="detail">
                                    <li>
                                        <span>
                                            <em>상담 연결</em>800건
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <em>상담 실패</em>200건
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="indicator-graph">
                            <div className="graph row">
                                <div className="pie-box">
                                    <h4>
                                        상담 요청<span>00,000</span>
                                    </h4>
                                    {/* 2024.06.07 chart 컴포넌트 분리 */}
                                    <PieGraph {...center} values={center} labels={centerLabel} height={193} />
                                </div>
                                <div className="pie-box">
                                    <h4>
                                        상담 종료<span>00,000</span>
                                    </h4>
                                    {/* 2024.06.07 chart 컴포넌트 분리 */}
                                    <PieGraph {...center1} values={center1} labels={center1Label} height={193} />
                                </div>
                            </div>
                            <div className="graph">
                                <div className="indicator-box">
                                    {indicators1.map((indicator, index) => (
                                        <dl className="indicator" key={index}>
                                            <dt>{indicator.label}</dt>
                                            <dd>{indicator.value}</dd>
                                        </dl>
                                    ))}
                                </div>
                                <div className="indicator-box">
                                    {indicators2.map((indicator, index) => (
                                        <dl className="indicator" key={index}>
                                            <dt>{indicator.label}</dt>
                                            <dd>{indicator.value}</dd>
                                        </dl>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mes-wrap">
                        <div className="mes-tit">
                            {/* // 240529 클래스 수정 */}
                            <h4>통계 상세 현황</h4>
                            <Tab tabTitles={tabCounsulState} handleTabClick={handleTabClick} activeTab={activeTab} />
                            <div className="right-btn">
                                <button className="btn small line weight ico gray down">Excel 다운로드</button>
                            </div>
                        </div>
                        <div className="tab-cont">
                            {activeTab === 0 && (
                                <>
                                    <div className="table-cont">
                                        <table className="table-basic statist">
                                            <colgroup>
                                                <col width="126px" />
                                                <col width="126px" />
                                                <col width="126px" />
                                                <col width="*" />
                                                <col width="*" />
                                                <col width="*" />
                                                <col width="*" />
                                                <col width="*" />
                                                <col width="126px" />
                                                <col width="126px" />
                                                <col width="126px" />
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th className="align-left" rowSpan={2}>
                                                        센터
                                                    </th>
                                                    <th className="align-left" rowSpan={2}>
                                                        팀
                                                    </th>
                                                    <th className="align-left" rowSpan={2}>
                                                        상담사(ID)
                                                    </th>
                                                    <th colSpan={5}>상담 종료 유형</th>
                                                    <th rowSpan={2}>
                                                        {/* 2024.07.23 className 수정 */}
                                                        <button
                                                            onClick={() => toggleActiveButton('entryTime')}
                                                            className={getButtonClass('entryTime')}
                                                        >
                                                            첫 응대시간<i></i>
                                                        </button>
                                                    </th>
                                                    <th rowSpan={2}>
                                                        {/* 2024.07.23 className 수정 */}
                                                        <button
                                                            onClick={() => toggleActiveButton('waitingTime')}
                                                            className={getButtonClass('waitingTime')}
                                                        >
                                                            응답시간<i></i>
                                                        </button>
                                                    </th>
                                                    <th rowSpan={2}>
                                                        {/* 2024.07.23 className 수정 */}
                                                        <button
                                                            onClick={() => toggleActiveButton('progressTime')}
                                                            className={getButtonClass('progressTime')}
                                                        >
                                                            상담시간<i></i>
                                                        </button>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th>고객 종료</th>
                                                    <th>상담사 종료</th>
                                                    <th>시스템 종료</th>
                                                    <th>이관 종료</th>
                                                    <th>차단 종료</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {tabData.map((row, index) => (
                                                    <tr key={index}>
                                                        <td className="align-left">{row.day}</td>
                                                        <td className="align-left">{row.request}</td>
                                                        <td className="align-left">{row.connection}</td>
                                                        <td>{row.end}</td>
                                                        <td>{row.clientEnd}</td>
                                                        <td>{row.systemEnd}</td>
                                                        <td>{row.transferEnd}</td>
                                                        <td>{row.blockingEnd}</td>
                                                        <td>{row.processing}</td>
                                                        <td>{row.failed}</td>
                                                        <td>{row.leave}</td>
                                                    </tr>
                                                ))}
                                                {/* {renderRows()} */}
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* 2024.06.07 dataLength 삭제 */}
                                    <CounsulPagination />
                                </>
                            )}
                            {activeTab === 1 && <div>내용2</div>}
                            {activeTab === 2 && <div>내용3</div>}
                            {activeTab === 3 && <div>내용4</div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CounsulStatist;
