import React from 'react';
import TopSelect from '@/components/TopSelect';
import { useRef, useState } from 'react';
import Tab from '@/components/Tab';
import BarGraph from '@/components/chart/BarGraph';
import PieGraph from '@/components/chart/PieGraph';
import CounsulPagination from '@/pages/counsul/CounsulPagination';
import { CartesianGrid, Dot, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import DatePickerWithShortcuts from '@/components/Test';
import { CALENDER_TYPE } from '@/constants/common';

const tabData = [
    {
        day: '24-02-02',
        week: '24-02+1',
        month: '24-01',
        request: '32,222,222건',
        connection: '30건',
        end: '30건',
        clientEnd: '30건',
        systemEnd: '30건',
        transferEnd: '30건',
        blockingEnd: '30건',
        processing: '30%',
        failed: '30건',
        leave: '30건',
        entry: '30건',
    },
    {
        day: '24-02-02',
        week: '24-02+2',
        month: '24-02',
        request: '32,222,222건',
        connection: '30건',
        end: '30건',
        clientEnd: '30건',
        systemEnd: '30건',
        transferEnd: '30건',
        blockingEnd: '30건',
        processing: '30%',
        failed: '30건',
        leave: '30건',
        entry: '30건',
    },
    {
        day: '24-02-02',
        week: '24-02+3',
        month: '24-03',
        request: '32,222,222건',
        connection: '30건',
        end: '30건',
        clientEnd: '30건',
        systemEnd: '30건',
        transferEnd: '30건',
        blockingEnd: '30건',
        processing: '30%',
        failed: '30건',
        leave: '30건',
        entry: '30건',
    },
    {
        day: '24-02-02',
        week: '24-02+4',
        month: '24-04',
        request: '32,222,222건',
        connection: '30건',
        end: '30건',
        clientEnd: '30건',
        systemEnd: '30건',
        transferEnd: '30건',
        blockingEnd: '30건',
        processing: '30%',
        failed: '30건',
        leave: '30건',
        entry: '30건',
    },
    {
        day: '24-02-02',
        week: '24-02+5',
        month: '24-05',
        request: '32,222,222건',
        connection: '30건',
        end: '30건',
        clientEnd: '30건',
        systemEnd: '30건',
        transferEnd: '30건',
        blockingEnd: '30건',
        processing: '30%',
        failed: '30건',
        leave: '30건',
        entry: '30건',
    },
    {
        day: '24-02-02',
        week: '24-02+6',
        month: '24-06',
        request: '32,222,222건',
        connection: '30건',
        end: '30건',
        clientEnd: '30건',
        systemEnd: '30건',
        transferEnd: '30건',
        blockingEnd: '30건',
        processing: '30%',
        failed: '30건',
        leave: '30건',
        entry: '30건',
    },
    {
        day: '24-02-02',
        week: '24-02+7',
        month: '24-07',
        request: '32,222,222건',
        connection: '30건',
        end: '30건',
        clientEnd: '30건',
        systemEnd: '30건',
        transferEnd: '30건',
        blockingEnd: '30건',
        processing: '30%',
        failed: '30건',
        leave: '30건',
        entry: '30건',
    },
    {
        day: '24-02-02',
        week: '24-02+8',
        month: '24-08',
        request: '32,222,222건',
        connection: '30건',
        end: '30건',
        clientEnd: '30건',
        systemEnd: '30건',
        transferEnd: '30건',
        blockingEnd: '30건',
        processing: '30%',
        failed: '30건',
        leave: '30건',
        entry: '30건',
    },
    {
        day: '24-02-02',
        week: '24-02+9',
        month: '24-09',
        request: '32,222,222건',
        connection: '30건',
        end: '30건',
        clientEnd: '30건',
        systemEnd: '30건',
        transferEnd: '30건',
        blockingEnd: '30건',
        processing: '30%',
        failed: '30건',
        leave: '30건',
        entry: '30건',
    },
    {
        day: '24-02-02',
        week: '24-02+10',
        month: '24-10',
        request: '32,222,222건',
        connection: '30건',
        end: '30건',
        clientEnd: '30건',
        systemEnd: '30건',
        transferEnd: '30건',
        blockingEnd: '30건',
        processing: '30%',
        failed: '30건',
        leave: '30건',
        entry: '30건',
    },
];

function Statistics() {
    const tabTitles = [{ title: '일별' }, { title: '주별' }, { title: '월별' }];
    // const lastTitle = title[title.length - 1];
    const [lastTitle, setlastTitle] = useState('일별');
    const [activeTab, setActiveTab] = useState(0); // 현재 활성화된 탭을 관리하는 상태

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

    console.log('dataLength', dataLength);
    // 탭 버튼을 클릭했을 때 호출되는 함수
    const handleTabClick = (index) => {
        setActiveTab(index);
        setlastTitle(tabTitles[index].title);
    };

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
    const inputData = {
        dataKey: 'date',
        yLimit: [0, 20000],
        values: [
            { date: '02-02', 상담연결건수: 20000 },
            { date: '02-03', 상담연결건수: 15000 },
            { date: '02-04', 상담연결건수: 10000 },
            { date: '02-05', 상담연결건수: 5000 },
            { date: '02-06', 상담연결건수: 0 },
            { date: '02-07', 상담연결건수: 4000 },
            { date: '02-08', 상담연결건수: 10000 },
            { date: '02-09', 상담연결건수: 14000 },
            { date: '02-10', 상담연결건수: 11890 },
            { date: '02-11', 상담연결건수: 20000 },
            { date: '02-12', 상담연결건수: 12390 },
            { date: '02-13', 상담연결건수: 14000 },
            { date: '02-14', 상담연결건수: 13490 },
            { date: '02-15', 상담연결건수: 14000 },
            { date: '02-16', 상담연결건수: 13490 },
        ],
    };

    const inputLabels = [{ key: '상담연결건수', color: '#ff710a' }];
    const yTicks = [0, 5000, 10000, 15000, 20000];

    const daily = [
        { name: '02-02', pv: 24 },
        { name: '02-03', pv: 24 },
        { name: '02-04', pv: 13 },
        { name: '02-05', pv: 13 },
        { name: '02-06', pv: 98 },
        { name: '02-07', pv: 98 },
        { name: '02-08', pv: 39 },
        { name: '02-04', pv: 39 },
        { name: '02-10', pv: 75 },
        { name: '02-11', pv: 70 },
        { name: '02-12', pv: 38 },
        { name: '02-13', pv: 38 },
        { name: '02-14', pv: 43 },
        { name: '02-15', pv: 43 },
        { name: '02-16', pv: 43 },
    ];
    const week = [
        { name: '02+1', pv: 24 },
        { name: '02+2', pv: 24 },
        { name: '02+3', pv: 13 },
        { name: '02+4', pv: 13 },
        { name: '03+1', pv: 98 },
        { name: '03+2', pv: 98 },
        { name: '03+3', pv: 39 },
        { name: '03+4', pv: 39 },
        { name: '04+1', pv: 75 },
        { name: '04+2', pv: 70 },
        { name: '04+3', pv: 38 },
        { name: '04+4', pv: 38 },
    ];
    const month = [
        { name: '24-01', pv: 24 },
        { name: '24-02', pv: 24 },
        { name: '24-03', pv: 13 },
        { name: '24-04', pv: 13 },
        { name: '24-05', pv: 98 },
        { name: '24-06', pv: 98 },
        { name: '24-07', pv: 39 },
        { name: '24-08', pv: 39 },
        { name: '24-09', pv: 75 },
        { name: '24-10', pv: 70 },
        { name: '24-11', pv: 38 },
        { name: '24-12', pv: 38 },
    ];

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const {
                cx,
                cy,
                payload: { pv, name },
            } = payload[0];
            return (
                <div>
                    <Dot cx={cx} cy={cy} r={5} fill="blue" />
                    <div
                        style={{
                            color: 'white',
                            backgroundColor: '#222222',
                            padding: '6px 8px',
                            boxShadow: 'box-shadow: 2px 2px 8px 0px rgba(54, 59, 66, 0.2)',
                            borderRadius: '4px',
                            fontSize: '13px',
                        }}
                    >
                        {`${name} ${pv}%`}
                    </div>
                </div>
            );
        }
        return null;
    };

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
                <h3>
                    기간별 통계<span className="sub-tit">{lastTitle}</span>
                </h3>
                <span className="navi">
                    <em>
                        <i className="home"></i>
                    </em>
                    <em>상담통계</em>
                    <em>기간별 통계</em>
                    <em>{lastTitle}</em>
                </span>
            </div>
            <Tab className={'statist'} tabTitles={tabTitles} handleTabClick={handleTabClick} activeTab={activeTab} />
            {/* 각 탭에 대한 내용 */}
            <div className="tab-cont statist">
                {activeTab === 0 && (
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
                                    <dd>조회 기간</dd>
                                    <dd className="no-short">2024-02-20 ~ 2024-02-20</dd>
                                </dl>
                            </div>
                        </div>
                        <div className="indicator-wrap">
                            <div className="tit-wrap">
                                <h4>주요 통계 지표</h4>
                                <button className="btn small line weight black txt">상담이력 조회</button>
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
                                    <h4>일별 상담연결 건수</h4>
                                    {/* 2024.06.07 chart 컴포넌트 분리 */}
                                    <BarGraph
                                        {...inputData}
                                        labels={inputLabels}
                                        yLimit={[0, 'auto']}
                                        yTicks={yTicks}
                                        legendVisible={false}
                                        barSize={15}
                                    />
                                </div>
                                <div className="graph">
                                    <h4>일별 상담 처리율</h4>
                                    <ResponsiveContainer width="100%" height={184}>
                                        <LineChart data={daily} margin={{ top: 5, right: 30, left: -15, bottom: 5 }}>
                                            <CartesianGrid vertical={false} strokeDasharray="0" />
                                            <XAxis
                                                dataKey="name"
                                                axisLine={false}
                                                tickLine={false}
                                                tick={{ fill: '#919190', fontWeight: '400' }}
                                            />
                                            <YAxis
                                                axisLine={false}
                                                tickLine={false}
                                                tickFormatter={(tick) => `${tick}%`}
                                                tick={{ fill: '#919190', fontWeight: '400' }}
                                            />
                                            <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3' }} />
                                            <Line
                                                type="linear"
                                                dataKey="pv"
                                                strokeWidth={2}
                                                dot={{ strokeWidth: 2 }}
                                                stroke="#2972E9"
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                        <div className="indicator-wrap">
                            <div className="tit-wrap">
                                <h4>통계 상세 현황</h4>
                                <button className="btn small line weight ico gray down">Excel 다운로드</button>
                            </div>
                            <div className="table-cont">
                                <table className="table-basic statist">
                                    <colgroup>
                                        <col width="*" />
                                        <col width="*" />
                                        <col width="*" />
                                        <col width="120px" />
                                        <col width="120px" />
                                        <col width="120px" />
                                        <col width="120px" />
                                        <col width="120px" />
                                        <col width="*" />
                                        <col width="120px" />
                                        <col width="120px" />
                                        <col width="120px" />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th rowSpan={2}>기간(일)</th>
                                            <th rowSpan={2}>
                                                {/* 2024.07.23 className 수정 */}
                                                <button
                                                    onClick={() => toggleActiveButton('entryTime')}
                                                    className={getButtonClass('entryTime')}
                                                >
                                                    상담요청<i></i>
                                                </button>
                                            </th>
                                            <th rowSpan={2}>
                                                {/* 2024.07.23 className 수정 */}
                                                <button
                                                    onClick={() => toggleActiveButton('waitingTime')}
                                                    className={getButtonClass('waitingTime')}
                                                >
                                                    상담연결<i></i>
                                                </button>
                                            </th>
                                            <th colSpan={5}>상담 종료</th>
                                            <th rowSpan={2}>
                                                {/* 2024.07.23 className 수정 */}
                                                <button
                                                    onClick={() => toggleActiveButton('progressTime')}
                                                    className={getButtonClass('progressTime')}
                                                >
                                                    처리율<i></i>
                                                </button>
                                            </th>
                                            <th colSpan={3}>상담 실패</th>
                                        </tr>
                                        <tr>
                                            <th>상담사 종료</th>
                                            <th>고객 종료</th>
                                            <th>시스템 종료</th>
                                            <th>이관 종료</th>
                                            <th>차단 종료</th>
                                            <th>대기 실패</th>
                                            <th>대기 중 이탈</th>
                                            <th>운영시간 외 인입</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tabData.map((row, index) => (
                                            <tr key={index}>
                                                <td>{row.day}</td>
                                                <td>{row.request}</td>
                                                <td>{row.connection}</td>
                                                <td>{row.end}</td>
                                                <td>{row.clientEnd}</td>
                                                <td>{row.systemEnd}</td>
                                                <td>{row.transferEnd}</td>
                                                <td>{row.blockingEnd}</td>
                                                <td>{row.processing}</td>
                                                <td>{row.failed}</td>
                                                <td>{row.leave}</td>
                                                <td>{row.entry}</td>
                                            </tr>
                                        ))}
                                        {/* {renderRows()} */}
                                    </tbody>
                                </table>
                            </div>
                            {/* 2024.06.07 dataLength 삭제 */}
                            <CounsulPagination />
                        </div>
                    </div>
                )}
                {activeTab === 1 && (
                    <div className="statist-cont">
                        <div className="search-wrap">
                            {/* <Calendar /> */}
                            <DatePickerWithShortcuts type={CALENDER_TYPE.WEEK} />
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
                                    <dd>조회 기간</dd>
                                    <dd className="no-short">2024-02-20 ~ 2024-02-20</dd>
                                </dl>
                            </div>
                        </div>
                        <div className="indicator-wrap">
                            <div className="tit-wrap">
                                <h4>주요 통계 지표</h4>
                                <button className="btn small line weight black txt">상담이력 조회</button>
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
                                    <h4>주별 상담연결 건수</h4>
                                    {/* 2024.06.07 chart 컴포넌트 분리 */}
                                    <BarGraph
                                        {...inputData}
                                        labels={inputLabels}
                                        yLimit={[0, 'auto']}
                                        yTicks={yTicks}
                                        legendVisible={false}
                                        barSize={15}
                                    />
                                </div>
                                <div className="graph">
                                    <h4>주별 상담 처리율</h4>
                                    <ResponsiveContainer width="100%" height={184}>
                                        <LineChart data={week} margin={{ top: 5, right: 30, left: -15, bottom: 5 }}>
                                            <CartesianGrid vertical={false} strokeDasharray="0" />
                                            <XAxis
                                                dataKey="name"
                                                axisLine={false}
                                                tickLine={false}
                                                tick={{ fill: '#919190', fontWeight: '400' }}
                                            />
                                            <YAxis
                                                axisLine={false}
                                                tickLine={false}
                                                tickFormatter={(tick) => `${tick}%`}
                                                tick={{ fill: '#919190', fontWeight: '400' }}
                                            />
                                            <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3' }} />
                                            <Line
                                                type="linear"
                                                dataKey="pv"
                                                strokeWidth={2}
                                                dot={{ strokeWidth: 2 }}
                                                stroke="#2972E9"
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                        <div className="indicator-wrap">
                            <div className="tit-wrap">
                                <h4>통계 상세 현황</h4>
                                <button className="btn small line weight ico gray down">Excel 다운로드</button>
                            </div>
                            <div className="table-cont">
                                <table className="table-basic statist">
                                    <colgroup>
                                        <col width="*" />
                                        <col width="*" />
                                        <col width="*" />
                                        <col width="120px" />
                                        <col width="120px" />
                                        <col width="120px" />
                                        <col width="120px" />
                                        <col width="120px" />
                                        <col width="*" />
                                        <col width="120px" />
                                        <col width="120px" />
                                        <col width="120px" />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th rowSpan={2}>기간(주)</th>
                                            <th rowSpan={2}>
                                                {/* 2024.07.23 className 수정 */}
                                                <button
                                                    onClick={() => toggleActiveButton('entryTime')}
                                                    className={getButtonClass('entryTime')}
                                                >
                                                    상담요청<i></i>
                                                </button>
                                            </th>
                                            <th rowSpan={2}>
                                                {/* 2024.07.23 className 수정 */}
                                                <button
                                                    onClick={() => toggleActiveButton('waitingTime')}
                                                    className={getButtonClass('waitingTime')}
                                                >
                                                    상담연결<i></i>
                                                </button>
                                            </th>
                                            <th colSpan={5}>상담 종료</th>
                                            <th rowSpan={2}>
                                            {/* 2024.07.23 className 수정 */}
                                                <button
                                                    onClick={() => toggleActiveButton('progressTime')}
                                                    className={getButtonClass('progressTime')}
                                                >
                                                    처리율<i></i>
                                                </button>
                                            </th>
                                            <th colSpan={3}>상담 실패</th>
                                        </tr>
                                        <tr>
                                            <th>상담사 종료</th>
                                            <th>고객 종료</th>
                                            <th>시스템 종료</th>
                                            <th>이관 종료</th>
                                            <th>차단 종료</th>
                                            <th>대기 실패</th>
                                            <th>대기 중 이탈</th>
                                            <th>운영시간 외 인입</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tabData.map((row, index) => (
                                            <tr key={index}>
                                                <td>{row.week}</td>
                                                <td>{row.request}</td>
                                                <td>{row.connection}</td>
                                                <td>{row.end}</td>
                                                <td>{row.clientEnd}</td>
                                                <td>{row.systemEnd}</td>
                                                <td>{row.transferEnd}</td>
                                                <td>{row.blockingEnd}</td>
                                                <td>{row.processing}</td>
                                                <td>{row.failed}</td>
                                                <td>{row.leave}</td>
                                                <td>{row.entry}</td>
                                            </tr>
                                        ))}
                                        {/* {renderRows()} */}
                                    </tbody>
                                </table>
                            </div>
                            {/* 2024.06.07 dataLength 삭제 */}
                            <CounsulPagination />
                        </div>
                    </div>
                )}
                {activeTab === 2 && (
                    <div className="statist-cont">
                        <div className="search-wrap">
                            <DatePickerWithShortcuts type={CALENDER_TYPE.MONTH} />
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
                                    <dd>조회 기간</dd>
                                    <dd className="no-short">2024-02-20 ~ 2024-02-20</dd>
                                </dl>
                            </div>
                        </div>
                        <div className="indicator-wrap">
                            <div className="tit-wrap">
                                <h4>주요 통계 지표</h4>
                                <button className="btn small line weight black txt">상담이력 조회</button>
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
                                        <PieGraph {...center} values={center} labels={centerLabel} height={193} />
                                    </div>
                                </div>
                                <div className="graph">
                                    <h4>월별 상담연결 건수</h4>
                                    {/* 2024.06.07 chart 컴포넌트 분리 */}
                                    <BarGraph
                                        {...inputData}
                                        labels={inputLabels}
                                        yLimit={[0, 'auto']}
                                        yTicks={yTicks}
                                        legendVisible={false}
                                        barSize={15}
                                    />
                                </div>
                                <div className="graph">
                                    <h4>월별 상담 처리율</h4>
                                    <ResponsiveContainer width="100%" height={184}>
                                        <LineChart data={month} margin={{ top: 5, right: 30, left: -15, bottom: 5 }}>
                                            <CartesianGrid vertical={false} strokeDasharray="0" />
                                            <XAxis
                                                dataKey="name"
                                                axisLine={false}
                                                tickLine={false}
                                                tick={{ fill: '#919190', fontWeight: '400' }}
                                            />
                                            <YAxis
                                                axisLine={false}
                                                tickLine={false}
                                                tickFormatter={(tick) => `${tick}%`}
                                                tick={{ fill: '#919190', fontWeight: '400' }}
                                            />
                                            <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3' }} />
                                            <Line
                                                type="linear"
                                                dataKey="pv"
                                                strokeWidth={2}
                                                dot={{ strokeWidth: 2 }}
                                                stroke="#2972E9"
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                        <div className="indicator-wrap">
                            <div className="tit-wrap">
                                <h4>통계 상세 현황</h4>
                                <button className="btn small line weight ico gray down">Excel 다운로드</button>
                            </div>
                            <div className="table-cont">
                                <table className="table-basic statist">
                                    <colgroup>
                                        <col width="*" />
                                        <col width="*" />
                                        <col width="*" />
                                        <col width="120px" />
                                        <col width="120px" />
                                        <col width="120px" />
                                        <col width="120px" />
                                        <col width="120px" />
                                        <col width="*" />
                                        <col width="120px" />
                                        <col width="120px" />
                                        <col width="120px" />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th rowSpan={2}>기간(월)</th>
                                            <th rowSpan={2}>
                                                {/* 2024.07.23 className 수정 */}
                                                <button
                                                    onClick={() => toggleActiveButton('entryTime')}
                                                    className={getButtonClass('entryTime')}
                                                >
                                                    상담요청<i></i>
                                                </button>
                                            </th>
                                            <th rowSpan={2}>
                                                {/* 2024.07.23 className 수정 */}
                                                <button
                                                    onClick={() => toggleActiveButton('waitingTime')}
                                                    className={getButtonClass('waitingTime')}
                                                >
                                                    상담연결<i></i>
                                                </button>
                                            </th>
                                            <th colSpan={5}>상담 종료</th>
                                            <th rowSpan={2}>
                                                {/* 2024.07.23 className 수정 */}
                                                <button
                                                    onClick={() => toggleActiveButton('progressTime')}
                                                    className={getButtonClass('progressTime')}
                                                >
                                                    처리율<i></i>
                                                </button>
                                            </th>
                                            <th colSpan={3}>상담 실패</th>
                                        </tr>
                                        <tr>
                                            <th>상담사 종료</th>
                                            <th>고객 종료</th>
                                            <th>시스템 종료</th>
                                            <th>이관 종료</th>
                                            <th>차단 종료</th>
                                            <th>대기 실패</th>
                                            <th>대기 중 이탈</th>
                                            <th>운영시간 외 인입</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tabData.map((row, index) => (
                                            <tr key={index}>
                                                <td>{row.month}</td>
                                                <td>{row.request}</td>
                                                <td>{row.connection}</td>
                                                <td>{row.end}</td>
                                                <td>{row.clientEnd}</td>
                                                <td>{row.systemEnd}</td>
                                                <td>{row.transferEnd}</td>
                                                <td>{row.blockingEnd}</td>
                                                <td>{row.processing}</td>
                                                <td>{row.failed}</td>
                                                <td>{row.leave}</td>
                                                <td>{row.entry}</td>
                                            </tr>
                                        ))}
                                        {/* {renderRows()} */}
                                    </tbody>
                                </table>
                            </div>
                            <CounsulPagination dataLength={dataLength} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Statistics;
